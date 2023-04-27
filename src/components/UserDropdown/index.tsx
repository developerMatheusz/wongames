import Dropdown from "../Dropdown";
import {
  AccountCircle,
  FavoriteBorder,
  ExitToApp
} from "styled-icons/material-outlined";
import { ChevronDown } from "@styled-icons/boxicons-regular/ChevronDown";
import * as S from "./styles";
import React from "react";
import { signOut } from "next-auth/react";

export type UserDropdownProps = {
  username: string;
};

const UserDropdown = ({ username }: UserDropdownProps) => {
  return (
    <Dropdown
      title={
        <>
          <AccountCircle size={24} />
          <S.Username>{username}</S.Username>
          <ChevronDown size={24} />
        </>
      }
    >
      <S.Nav>
        <S.Link href="/profile/me">
          <AccountCircle />
          <span>My profile</span>
        </S.Link>
        <S.Link href="/wishlist" title="Wishlist">
          <FavoriteBorder />
          <span>Wishlist</span>
        </S.Link>
        <S.Link role="button" onClick={() => signOut()} title="Sign out">
          <ExitToApp />
          <span>Sign out</span>
        </S.Link>
      </S.Nav>
    </Dropdown>
  );
};

export default UserDropdown;
