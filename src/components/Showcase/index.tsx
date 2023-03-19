import Heading from "../Heading";
import GameCardSlider from "../GameCardSlider";
import HighLight, { HighlightProps } from "../Highlight";
import { GameCardProps } from "../GameCard";
import * as S from "./styles";

export type ShowcaseProps = {
  title?: string;
  highlight?: HighlightProps;
  games?: GameCardProps[];
};

const Showcase = ({ title, highlight, games }: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <HighLight {...highlight} />}
    {!!games && <GameCardSlider items={games} color="secondary" />}
  </S.Wrapper>
);

export default Showcase;
