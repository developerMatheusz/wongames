import Link from "next/link";
import {
  Email,
  Lock,
  ErrorOutline as Error
} from "@styled-icons/material-outlined";
import Button from "../Button";
import TextField from "../TextField";
import { FormWrapper, FormLink, FormLoading, FormError } from "../Form";
import * as S from "./styles";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FieldErrors, signInValidate } from "@/utils/validations";

const FormSignIn = () => {
  const [formError, setFormError] = useState("");
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [values, setValues] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const routes = useRouter();
  const { push, query } = routes;

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const errors = signInValidate(values);

    if (Object.keys(errors).length) {
      setFieldError(errors);
      setLoading(false);
      return;
    }

    setFieldError({});

    const result = await signIn("credentials", {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ""}`
    });

    if (result?.url) {
      return push(result?.url);
    }

    setLoading(false);

    setFormError("username or password is invalid");
  };

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <Error /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          onInputChange={(v) => handleInput("email", v)}
          name="email"
          placeholder="Email"
          type="text"
          error={fieldError?.email}
          icon={<Email />}
        />
        <TextField
          onInputChange={(v) => handleInput("password", v)}
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          icon={<Lock />}
        />
        <S.ForgotPassword href="/forgot-password">
          Forgot your password?
        </S.ForgotPassword>
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign in now</span>}
        </Button>
        <FormLink>
          Do not have an account?{"  "} <Link href="/sign-up">Sign up</Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};

export default FormSignIn;
