import * as S from "./styles";
import Heading from "../Heading";
import TextField from "../TextField";
import Button from "../Button";
import React from "react";
import Link from "next/link";

export type FormProfileProps = {
  username?: string;
  email?: string;
};

const FormProfile = ({ email, username }: FormProfileProps) => {
  return (
    <S.Wrapper>
      <Heading lineBottom color="black" size="small">
        My profile
      </Heading>
      <S.Form>
        <TextField
          name={username}
          placeholder="Username"
          label="Username"
          initialValue={username}
        />
        <TextField
          name="email"
          type="text"
          placeholder="E-mail"
          initialValue={email}
          label="E-mail"
          disabled
        />
        <S.ButtonContainer>
          <Link href={`/forgot-password?email=${email}`}>
            <Button minimal size="medium">
              Reset Password
            </Button>
          </Link>
          <Button size="large">Save</Button>
        </S.ButtonContainer>
      </S.Form>
    </S.Wrapper>
  );
};

export default FormProfile;
