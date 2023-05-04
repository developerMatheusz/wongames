import * as S from "./styles";
import Base from "../Base";
import GameInfo, { GameInfoProps } from "../../components/GameInfo";
import Gallery, { GalleryImageProps } from "../../components/Gallery";
import TextContent from "../../components/TextContent";
import GameDetails, { GameDetailsProps } from "../../components/GameDetails";
import { GameCardProps } from "../../components/GameCard";
import { HighlightProps } from "../../components/Highlight";
import Showcase from "../../components/Showcase";
import { Divider } from "../../components/Divider";
import React from "react";
import { NextSeo } from "next-seo";

export type GameTemplateProps = {
  slug?: string;
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
  details: GameDetailsProps;
  upcomingTitle?: string;
  upcommingGames: GameCardProps[];
  upcommingHighlight: HighlightProps;
  recommendedTitle?: string;
  recommendedGames: GameCardProps[];
};

const Game = ({
  slug,
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingTitle,
  upcommingGames,
  upcommingHighlight,
  recommendedTitle,
  recommendedGames
}: GameTemplateProps) => {
  return (
    <Base>
      <NextSeo
        title={`${gameInfo.title} - Won Games`}
        description={gameInfo.description}
        canonical={`https://wongames.matheuszanela.com.br/game/${slug}`}
        openGraph={{
          url: `https://wongames.matheuszanela.com.br/game/${slug}`,
          title: `${gameInfo.title} - Won Games`,
          description: gameInfo.description,
          images: [
            {
              url: cover,
              alt: `${gameInfo.title}`
            }
          ]
        }}
      />
      <S.Cover src={cover} role="image" aria-label="cover" />
      <S.Main>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>
        <S.SectionGalery>
          {!!gallery && <Gallery items={gallery} />}
        </S.SectionGalery>
        <S.SectionDescription>
          <TextContent title="Description" content={description} />
        </S.SectionDescription>
        <S.SectionGameDetails>
          <GameDetails {...details} />
          <Divider />
        </S.SectionGameDetails>
        <Showcase
          title={upcomingTitle || "UpComing Games"}
          games={upcommingGames}
          highlight={upcommingHighlight}
        />
        <Showcase
          title={recommendedTitle || "You may like these games"}
          games={recommendedGames}
        />
      </S.Main>
    </Base>
  );
};

export default Game;
