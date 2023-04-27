import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from "styled-icons/material-outlined";
import * as S from "./styles";
import React from "react";
import { signOut } from "next-auth/react";

export type ProfileMenuProps = {
  activeLink?: "/profile/me" | "/profile/cards" | "/profile/orders" | string;
};

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  return (
    <S.Nav>
      <S.Link
        isActive={activeLink === "/profile/me"}
        href="/profile/me"
        title="My profile"
      >
        <AccountCircle size={24} />
        <span>My profile</span>
      </S.Link>
      <S.Link
        isActive={activeLink === "/profile/cards"}
        href="/profile/cards"
        title="My cards"
      >
        <CreditCard size={24} />
        <span>My cards</span>
      </S.Link>
      <S.Link
        isActive={activeLink === "/profile/orders"}
        href="/profile/orders"
        title="My orders"
      >
        <FormatListBulleted size={24} />
        <span>My orders</span>
      </S.Link>
      <S.Link role="button" onClick={() => signOut()}>
        <ExitToApp size={24} />
        <span>Sign out</span>
      </S.Link>
    </S.Nav>
  );
};

export default ProfileMenu;
