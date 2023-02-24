import * as S from "./styles";
import { Menu2 as MenuIcon } from "@styled-icons/remix-line/Menu2";
import { ShoppingCart as ShoppingCartIcon } from "@styled-icons/material-outlined/ShoppingCart";
import { Search as SearchIcon } from "@styled-icons/material-outlined/Search";
import Logo from "./components/Logo";

export default function Menu() {
  return (
    <S.Wrapper>
      <S.IconWrapper>
        <MenuIcon />
      </S.IconWrapper>
      <Logo />
      <S.IconWrapper>
        <SearchIcon />
      </S.IconWrapper>
      <S.IconWrapper>
        <ShoppingCartIcon />
      </S.IconWrapper>
    </S.Wrapper>
  );
}
