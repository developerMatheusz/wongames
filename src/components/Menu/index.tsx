import { useState } from "react";
import * as S from "./styles";
import { Menu2 as MenuIcon } from "@styled-icons/remix-line/Menu2";
import { Search as SearchIcon } from "@styled-icons/material-outlined/Search";
import { Close as CloseIcon } from "@styled-icons/ionicons-outline/Close";
import Logo from "../Logo";
import Button from "../Button";
import MediaMatch from "../MediaMatch";
import Link from "next/link";
import CartDropdown from "../CartDropdown";
import CartIcon from "../CartIcon";
import UserDropdown from "../UserDropdown";
import React from "react";

type MenuProps = {
  username?: string | null;
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
        <Link href="/">
          <Logo hideOnMobile />
        </Link>
      </S.LogoWrapper>
      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="/">Home</S.MenuLink>
          <S.MenuLink href="/games">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>
      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <MediaMatch greaterThan="medium">
            <CartDropdown />
          </MediaMatch>
          <MediaMatch lessThan="medium">
            <Link href="/cart">
              <CartIcon />
            </Link>
          </MediaMatch>
        </S.IconWrapper>
        <MediaMatch greaterThan="medium">
          {!username ? (
            <MediaMatch greaterThan="medium">
              <Button href="/sign-in" as="a">
                Sign in
              </Button>
            </MediaMatch>
          ) : (
            <UserDropdown username={username} />
          )}
        </MediaMatch>
      </S.MenuGroup>
      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="/">Home</S.MenuLink>
          <S.MenuLink href="/games">Explore</S.MenuLink>
          {!!username && (
            <>
              <S.MenuLink href="/profiles/me">My account</S.MenuLink>
              <S.MenuLink href="/profiles/wishlist">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>
        {!username && (
          <S.RegisterBox>
            <Button href="/sign-in" fullWidth size="large" as="a">
              Sign in
            </Button>
            <span>or</span>
            <S.CreateAccount href="/sign-up" title="Sign Up">
              Sign Up
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  );
};

export default Menu;
