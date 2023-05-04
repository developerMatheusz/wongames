import React, { useEffect } from "react";
import * as S from "./styles";
import { Done } from "@styled-icons/material-outlined/Done";
import Link from "next/link";
import Showcase from "../../components/Showcase";
import Base from "../Base";
import { Container } from "../../components/Container";
import { GameCardProps } from "../../components/GameCard";
import { HighlightProps } from "../../components/Highlight";
import { useCart } from "@/hooks/use-cart";
import { NextSeo } from "next-seo";

export type SuccessTemplateProps = {
  recommendedTitle: string;
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
};

const Success = ({
  recommendedGames,
  recommendedHighlight,
  recommendedTitle
}: SuccessTemplateProps) => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <Base>
      <NextSeo title={`Successful page - Won Games`} />
      <Container>
        <S.Wrapper>
          <S.Heading>Your purchase was successful!</S.Heading>
          <S.CheckMark>
            <Done />
          </S.CheckMark>
          <S.Text>
            Wait for your payment details by email. Your game is now available
            for download inside your{" "}
            <Link href="/profile/orders">Orders List</Link>
          </S.Text>
        </S.Wrapper>
      </Container>
      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
};

export default Success;
