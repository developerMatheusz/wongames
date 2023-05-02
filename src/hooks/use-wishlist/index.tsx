/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQueryWishlist } from "../../graphql/queries/wishlist";
import { GameCardProps } from "../../components/GameCard";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { useSession } from "next-auth/react";
import { gamesMapper } from "../../utils/mappers";
import { useMutation } from "@apollo/client";
import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST
} from "../../graphql/mutations/wishlist";

export type WishlistContextData = {
  items: GameCardProps[];
  isInWishlist: (id: string) => boolean;
  addToWishlist: (id: string) => void;
  removeFromWishlist: (id: string) => void;
  loading: boolean;
};

export const WishlistDefaultValues = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false
};

export const WishlistContext = createContext<WishlistContextData>(
  WishlistDefaultValues
);

export type WishlistProviderProps = {
  children: React.ReactNode;
};

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const { data: session } = useSession();
  const [wishlistId, setWishlistId] = useState<string | null>();
  const [wishlistItems, setWishlistItems] = useState<any>([]);

  const [createList, { loading: loadingCreate }] = useMutation(
    MUTATION_CREATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(
          data?.createWishlist.data?.attributes.games.data || []
        );
        setWishlistId(data?.createWishlist.data?.id);
      }
    }
  );

  const [updateList, { loading: loadingUpdate }] = useMutation(
    MUTATION_UPDATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(
          data?.updateWishlist.data?.attributes.games.data || []
        );
      }
    }
  );

  const { data, loading: loadingQuery } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: {
        eq: session?.user?.email as string
      }
    }
  });

  useEffect(() => {
    setWishlistItems(data?.wishlists.data[0]?.attributes.games.data || []);
    setWishlistId(data?.wishlists.data[0]?.id);
  }, [data]);

  const wishlistIds = useMemo(
    () => wishlistItems.map((game: any) => game.id),
    [wishlistItems]
  );

  const isInWishlist = (id: string) =>
    !!wishlistItems.find((game: any) => game.id === id);

  const addToWishlist = (id: string) => {
    if (!wishlistId) {
      return createList({
        variables: {
          input: {
            games: [...wishlistIds, id]
          }
        }
      });
    }

    return updateList({
      variables: {
        id: wishlistId,
        input: {
          games: [...wishlistIds, id]
        }
      }
    });
  };

  const removeFromWishlist = (id: string) => {
    return updateList({
      variables: {
        id: wishlistId,
        input: {
          games: wishlistIds.filter((gameId: string) => gameId !== id)
        }
      }
    });
  };

  return (
    <WishlistContext.Provider
      value={{
        items: gamesMapper(wishlistItems),
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        loading: loadingQuery || loadingCreate || loadingUpdate
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
