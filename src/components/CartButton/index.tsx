import {
  AddShoppingCart,
  RemoveShoppingCart
} from "@styled-icons/material-outlined";

import Button, { ButtonProps } from "../Button";
import { useCart } from "../../hooks/use-cart";
import React from "react";

type CartButtonProps = {
  id: string;
  hasText?: boolean;
} & Pick<ButtonProps, "size">;

const CartButton = ({
  id,
  size = "small",
  hasText = false
}: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart();
  const ButtonText = isInCart(id) ? "Remove from cart" : "Add to cart";

  return (
    <Button
      icon={isInCart(id) ? <RemoveShoppingCart /> : <AddShoppingCart />}
      size={size}
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
      aria-label={ButtonText}
    >
      {hasText && ButtonText}
    </Button>
  );
};

export default CartButton;
