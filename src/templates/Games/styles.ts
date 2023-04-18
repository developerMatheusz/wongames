import { Container } from "@/components/Container";
import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Main = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan("medium")`
      display: grid;
      grid-template-columns: 26rem 1fr;
      gap: ${theme.grid.gutter};
    `}
  `}
`;
