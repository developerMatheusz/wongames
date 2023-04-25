import { FormWrapper, FormLink } from "../Form";
import TextField from "../TextField";
import { AccountCircle, Email, Lock } from "styled-icons/material-outlined";
import Button from "../Button";
import Link from "next/link";
import React from "react";

const FormSignUp = () => {
  return (
    <FormWrapper>
      <form>
        <TextField
          name="name"
          placeholder="Name"
          type="text"
          icon={<AccountCircle />}
        />
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
        <TextField
          name="confirm-password"
          placeholder="Confirm password"
          type="confirm-password"
          icon={<Lock />}
        />
        <Button size="large" fullWidth>
          Sign up now
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
