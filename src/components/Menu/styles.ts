import styled from "styled-components";
import { css } from "styled-components";

export const Wrapper = styled.menu``;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 2.4rem;
    height: 2.4rem;
  `}
`;
