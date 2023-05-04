import { Container } from "../../components/Container";
import { useRouter } from "next/router";
import Heading from "../../components/Heading";
import ProfileMenu from "../../components/ProfileMenu";
import Base from "../Base";
import * as S from "./styles";
import React from "react";
import { NextSeo } from "next-seo";

export type ProfileTemplateProps = {
  children: React.ReactNode;
};

const Profile = ({ children }: ProfileTemplateProps) => {
  const { asPath } = useRouter();

  return (
    <Base>
      <NextSeo title={`My Profile - Won Games`} />
      <Container>
        <Heading lineLeft lineColor="secondary">
          My profile
        </Heading>
        <S.Main>
          <ProfileMenu activeLink={asPath} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  );
};

export default Profile;
