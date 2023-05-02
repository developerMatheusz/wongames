import Button, { ButtonProps } from "../Button";
import { FavoriteBorder, Favorite } from "@styled-icons/material-outlined";
import { useWishlist } from "../../hooks/use-wishlist";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import Spinner from "../Spinner";

type WishlistButtonProps = {
  id: string;
  hasText?: boolean;
} & Pick<ButtonProps, "size">;

const WishlistButton = ({
  id,
  hasText,
  size = "small"
}: WishlistButtonProps) => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const handleClick = async () => {
    setLoading(true);
    isInWishlist(id) ? await removeFromWishlist(id) : await addToWishlist(id);
    setLoading(false);
  };

  const ButtonText = isInWishlist(id)
    ? "Remove from Wishlist"
    : "Add to Wishlist";

  if (!session) return null;

  return (
    <Button
      icon={
        loading ? (
          <Spinner />
        ) : isInWishlist(id) ? (
          <Favorite aria-label={ButtonText} />
        ) : (
          <FavoriteBorder aria-label={ButtonText} />
        )
      }
      minimal
      onClick={handleClick}
      size={size}
    >
      {hasText && ButtonText}
    </Button>
  );
};

export default WishlistButton;
