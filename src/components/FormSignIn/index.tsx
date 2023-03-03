import Link from "next/link";
import { Email, Lock } from "styled-icons/material-outlined";
import Button from "../Button";
import TextField from "../TextField";
import { FormWrapper, FormLink } from "../Form";
import * as S from "./styles";

const FormSignIn = () => {
  return (
    <FormWrapper>
      <form>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
        <Button size="large" fullWidth>
          Sign in now
        </Button>
        <FormLink>
          Do not have an account?{"  "} <Link href="/sign-up">Sign up</Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};

export default FormSignIn;
