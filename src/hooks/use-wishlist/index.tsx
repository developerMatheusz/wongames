/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQueryWishlist } from "@/graphql/queries/wishlist";
import { GameCardProps } from "../../components/GameCard";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { gamesMapper } from "../../utils/mappers";

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
  const [wishlistItems, setWishlistItems] = useState<any>([]);

  const { data, loading } = useQueryWishlist({
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
  }, [data]);

  const isInWishlist = (id: string) =>
    !!wishlistItems.find((game: any) => game.id === id);

  const addToWishlist = (id: string) => { };
  const removeFromWishlist = (id: string) => { };

  return (
    <WishlistContext.Provider
      value={{
        items: gamesMapper(wishlistItems),
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        loading
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
