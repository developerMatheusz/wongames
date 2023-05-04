import Base from "../Base";
import { Container } from "../../components/Container";
import Heading from "../../components/Heading";
import GameCard, { GameCardProps } from "../../components/GameCard";
import { HighlightProps } from "../../components/Highlight";
import Showcase from "../../components/Showcase";
import { Grid } from "../../components/Grid";
import { Divider } from "../../components/Divider";
import Empty from "../../components/Empty";
import React from "react";
import { useWishlist } from "../../hooks/use-wishlist";
import Loader from "../../components/Loader";
import * as S from "./styles";
import { NextSeo } from "next-seo";

export type WishlistTemplateProps = {
  recommendedTitle?: string;
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
};

const Wishlist = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => {
  const { items, loading } = useWishlist();

  return (
    <Base>
      <NextSeo title={`My favorite games to Won Games`} />
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>
        {loading ? (
          <S.Loading>
            <Loader />
          </S.Loading>
        ) : items.length >= 1 ? (
          <Grid>
            {items?.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here"
            hasLink
          />
        )}
        <Divider />
      </Container>
      <Showcase
        title={recommendedTitle || "You may like these games"}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
};

export default Wishlist;
