import Home, { HomeTemplateProps } from "../templates/Home";
import bannersMock from "@/components/BannerSlider/mock";
import gamesMock from "@/components/GameCardSlider/mock";
import highlightMock from "@/components/Highlight/mock";

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHightlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighlight: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock
    }
  };
}
