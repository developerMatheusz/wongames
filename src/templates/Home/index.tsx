import { Container } from "@/components/Container";
import { BannerProps } from "@/components/Banner";
import { GameCardProps } from "@/components/GameCard";
import HighLight, { HighlightProps } from "@/components/Highlight";
import BannerSlider from "@/components/BannerSlider";
import GameCardSlider from "@/components/GameCardSlider";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Menu from "@/components/Menu";
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
    <section>
      <Container>
        <Menu />
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Container>
          <Heading lineLeft lineColor="secondary">
            News
          </Heading>
          <GameCardSlider items={newGames} color="black" />
        </Container>
      </S.SectionNews>

      <Container>
        <S.SectionMostPopular>
          <Heading lineLeft lineColor="secondary">
            Most Popular
          </Heading>
          <HighLight {...mostPopularHightlight} />
          <GameCardSlider items={mostPopularGames} />
        </S.SectionMostPopular>
      </Container>

      <Container>
        <S.SectionUpcoming>
          <Heading lineLeft lineColor="secondary">
            Upcomming
          </Heading>
          <GameCardSlider items={upcommingGames} />
          <HighLight {...upcommingHighlight} />
          <GameCardSlider items={upcommingMoreGames} />
        </S.SectionUpcoming>
      </Container>

      <Container>
        <S.SectionFreeGames>
          <Heading lineLeft lineColor="secondary">
            Free Games
          </Heading>
          <HighLight {...freeHighlight} />
          <GameCardSlider items={freeGames} />
        </S.SectionFreeGames>
      </Container>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  );
}
