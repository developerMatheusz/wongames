import * as S from "./styles";
import GameItem from "../GameItem";
import Button from "../Button";
import Empty from "../Empty";
import { useCart } from "../../hooks/use-cart";
import React from "react";
import Loader from "../Loader";

export type CartListProps = {
  hasButton?: boolean;
};

const CartList = ({ hasButton = false }: CartListProps) => {
  const { items, total, loading } = useCart();

  if (loading) {
    return (
      <S.Loading>
        <Loader />
      </S.Loading>
    );
  }

  return (
    <S.Wrapper isEmpty={!items?.length}>
      {items?.length ? (
        <>
          <S.GamesList>
            {items?.map((item) => (
              <GameItem key={item.title} {...item} />
            ))}
          </S.GamesList>
          <S.Footer>
            {!hasButton && <span>Total:</span>}
            <S.Total>{total}</S.Total>
            {hasButton && (
              <Button href="/cart" as="a">
                Buy it now
              </Button>
            )}
          </S.Footer>
        </>
      ) : (
        <>
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        </>
      )}
    </S.Wrapper>
  );
};

export default CartList;
