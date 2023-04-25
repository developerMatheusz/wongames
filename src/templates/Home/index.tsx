import { Container } from "../../components/Container";
import { BannerProps } from "../../components/Banner";
import { GameCardProps } from "../../components/GameCard";
import { HighlightProps } from "../../components/Highlight";
import BannerSlider from "../../components/BannerSlider";
import Showcase from "../../components/Showcase";
import Base from "../Base";
import * as S from "./styles";
import React from "react";

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGamesTitle: string;
  newGames: GameCardProps[];
  mostPopularHightlight: HighlightProps;
  mostPopularGamesTitle: string;
  mostPopularGames: GameCardProps[];
  upcomingGamesTitle: string;
  upcommingGames: GameCardProps[];
  upcommingHighlight: HighlightProps;
  freeGamesTitle: string;
  freeGames: GameCardProps[];
  freeHighlight: HighlightProps;
};

export default function Home({
  banners,
  newGames,
  mostPopularHightlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighlight,
  freeGames,
  freeHighlight,
  newGamesTitle,
  mostPopularGamesTitle,
  upcomingGamesTitle,
  freeGamesTitle
}: HomeTemplateProps) {
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>
      <S.SectionNews>
        <Showcase title={newGamesTitle} games={newGames} />
      </S.SectionNews>
      <Showcase
        title={mostPopularGamesTitle}
        highlight={mostPopularHightlight}
        games={mostPopularGames}
      />
      <Showcase
        title={upcomingGamesTitle}
        games={upcommingGames}
        highlight={upcommingHighlight}
      />
      <Showcase
        title={freeGamesTitle}
        highlight={freeHighlight}
        games={freeGames}
      />
    </Base>
  );
}
