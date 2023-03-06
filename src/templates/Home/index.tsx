import { Container } from "@/components/Container";
import { BannerProps } from "@/components/Banner";
import { GameCardProps } from "@/components/GameCard";
import { HighlightProps } from "@/components/Highlight";
import BannerSlider from "@/components/BannerSlider";
import Showcase from "@/components/Showcase";
import Base from "../Base";
import * as S from "./styles";

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHightlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcommingGames: GameCardProps[];
  upcommingHighlight: HighlightProps;
  upcommingMoreGames: GameCardProps[];
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
  upcommingMoreGames,
  freeGames,
  freeHighlight
}: HomeTemplateProps) {
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>
      <S.SectionNews>
        <Showcase title="News" games={newGames} />
      </S.SectionNews>
      <Showcase
        title="Most Popular"
        highlight={mostPopularHightlight}
        games={mostPopularGames}
      />
      <S.SectionUpcoming>
        <Showcase title="Upcomming" games={upcommingGames} />
        <Showcase highlight={upcommingHighlight} games={upcommingMoreGames} />
      </S.SectionUpcoming>
      <Showcase
        title="Free games"
        highlight={freeHighlight}
        games={freeGames}
      />
    </Base>
  );
}
