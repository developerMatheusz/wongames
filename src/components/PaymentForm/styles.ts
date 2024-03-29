import styled, { css } from "styled-components";
import { tint } from "polished";
import * as ButtonStyles from "../Button/styles";

export const Wrapper = styled.main``;

export const Body = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    background: ${theme.colors.white};
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${tint(0.2, theme.colors.lightGray)};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.small};
    display: flex;
    align-items: center;
    ${ButtonStyles.Wrapper} {
      padding-left: ${theme.spacings.xxsmall};
      padding-right: ${theme.spacings.xxsmall};
      outline: 0;
    }
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
    padding-top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
  `}
`;

export const FreeGames = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
`;
