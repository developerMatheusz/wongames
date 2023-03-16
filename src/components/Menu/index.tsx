import { useState } from "react";
import * as S from "./styles";
import { Menu2 as MenuIcon } from "@styled-icons/remix-line/Menu2";
import { ShoppingCart as ShoppingCartIcon } from "@styled-icons/material-outlined/ShoppingCart";
import { Search as SearchIcon } from "@styled-icons/material-outlined/Search";
import { Close as CloseIcon } from "@styled-icons/ionicons-outline/Close";
import Logo from "../Logo";
import Button from "../Button";
import MediaMatch from "../MediaMatch";
import Link from "next/link";

type MenuProps = {
  username?: string;
};

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>
      <S.LogoWrapper>
        <Link legacyBehavior href="/" passHref>
          <a>
            <Logo hideOnMobile />
          </a>
        </Link>
      </S.LogoWrapper>
      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>
      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.IconWrapper>
        {!username && (
          <MediaMatch greaterThan="medium">
            <Link legacyBehavior href="/sign-in" passHref>
              <Button as="a">Sign in</Button>
            </Link>
          </MediaMatch>
        )}
      </S.MenuGroup>
      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <S.MenuLink href="#">Explore</S.MenuLink>
          {!!username && (
            <>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>
        {!username && (
          <S.RegisterBox>
            <Link legacyBehavior href="/sign-in" passHref>
              <Button fullWidth size="large" as="a">
                Sign in
              </Button>
            </Link>
            <span>or</span>
            <Link legacyBehavior href="/sign-up" passHref>
              <S.CreateAccount title="Sign Up">Sign Up</S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  );
};

export default Menu;
