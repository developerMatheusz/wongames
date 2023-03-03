import Heading from "@/components/Heading";
import Logo from "@/components/Logo";
import Link from "next/link";
import * as S from "./styles";

type AuthProps = {
  title: string;
  children: React.ReactNode;
};

export default function Auth({ title, children }: AuthProps) {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.BannerContent>
          <Link href="/">
            <Logo id="banner" />
          </Link>
          <div>
            <Heading size="huge">All your favorite games in one place</Heading>
            <S.Subtitle>
              <strong>WON</strong> is the best and most complete gaming platform
            </S.Subtitle>
          </div>
          <S.Footer>
            Won Games 2023 &copy; Todos os Direitos Reservados
          </S.Footer>
        </S.BannerContent>
      </S.BannerBlock>
      <S.Content>
        <S.ContentWrapper>
          <Link href="/">
            <Logo id="content" color="black" size="large" />
          </Link>
          <Heading color="black" lineColor="secondary" lineLeft>
            {title}
          </Heading>

          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.Wrapper>
  );
}
