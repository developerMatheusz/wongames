import { FormWrapper, FormLink, FormError, FormLoading } from "../Form";
import TextField from "../TextField";
import {
  AccountCircle,
  Email,
  Lock,
  ErrorOutline as Error
} from "styled-icons/material-outlined";
import Button from "../Button";
import Link from "next/link";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { MUTATION_REGISTER } from "../../graphql/mutations/register";
import { signIn } from "next-auth/react";
import { FieldErrors, signUpValidate } from "../../utils/validations";

const FormSignUp = () => {
  const [formError, setFormError] = useState("");
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onError: () => setFormError("Um erro inesperado ocorreu!"),
    onCompleted: () => {
      !error &&
        signIn("credentials", {
          email: values.email,
          password: values.password,
          callbackUrl: "/"
        });
    }
  });

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setFormError("");

    const errors = signUpValidate(values);

    if (Object.keys(errors).length) {
      setFieldError(errors);
      return;
    }

    setFieldError({});

    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    });
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
          name="username"
          placeholder="Username"
          type="text"
          error={fieldError?.username}
          onInputChange={(v) => handleInput("username", v)}
          icon={<AccountCircle />}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="text"
          error={fieldError?.email}
          onInputChange={(v) => handleInput("email", v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput("password", v)}
          icon={<Lock />}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          error={fieldError?.confirm_password}
          onInputChange={(v) => handleInput("confirm_password", v)}
          icon={<Lock />}
        />
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign up now</span>}
        </Button>
        <FormLink>
          Already have an account?{"  "}
          <Link href="/sign-in">Sign in</Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};

export default FormSignUp;
