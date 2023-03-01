import { Container } from "@/components/Container";
import { BannerProps } from "@/components/Banner";
import { GameCardProps } from "@/components/GameCard";
import HighLight, { HighlightProps } from "@/components/Highlight";
import BannerSlider from "@/components/BannerSlider";
import GameCardSlider from "@/components/GameCardSlider";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Menu from "@/components/Menu";

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
        <BannerSlider items={banners} />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>
        <GameCardSlider items={newGames} color="black" />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>
        <HighLight {...mostPopularHightlight} />
        <GameCardSlider items={mostPopularGames} />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Upcomming
        </Heading>
        <GameCardSlider items={upcommingGames} />
        <HighLight {...upcommingHighlight} />
        <GameCardSlider items={upcommingMoreGames} />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>
        <HighLight {...freeHighlight} />
        <GameCardSlider items={freeGames} />
      </Container>

      <Container>
        <Footer />
      </Container>
    </section>
  );
}
