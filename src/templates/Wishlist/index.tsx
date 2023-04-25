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

export type WishlistTemplateProps = {
  games?: GameCardProps[];
  recommendedTitle?: string;
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
};

const Wishlist = ({
  games = [],
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>
        {games.length >= 1 ? (
          <Grid>
            {games?.map((game, index) => (
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
