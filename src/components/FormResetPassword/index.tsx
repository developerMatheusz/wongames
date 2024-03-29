import { Lock, ErrorOutline as Error } from "@styled-icons/material-outlined";
import Button from "../Button";
import TextField from "../TextField";
import { FormWrapper, FormLoading, FormError } from "../Form";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { FieldErrors, resetValidate } from "../../utils/validations";
import { signIn } from "next-auth/react";

const FormResetPassword = () => {
  const [formError, setFormError] = useState("");
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [values, setValues] = useState({ password: "", confirm_password: "" });
  const [loading, setLoading] = useState(false);
  const { query } = useRouter();

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const errors = resetValidate(values);

    if (Object.keys(errors).length) {
      setFieldError(errors);
      setLoading(false);
      return;
    }

    setFieldError({});

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/reset-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          password: values.password,
          passwordConfirmation: values.confirm_password,
          code: query.code
        })
      }
    );

    const data = await response.json();

    if (data.error) {
      setFormError(data.error.message);
      setLoading(false);
    } else {
      signIn("credentials", {
        email: data.email,
        password: values.password,
        callbackUrl: "/"
      });
    }
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
          {loading ? <FormLoading /> : <span>Reset Password</span>}
        </Button>
      </form>
    </FormWrapper>
  );
};

export default FormResetPassword;
