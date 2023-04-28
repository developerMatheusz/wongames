import {
  Email,
  ErrorOutline as Error,
  CheckCircleOutline as CheckCircle
} from "@styled-icons/material-outlined";
import Button from "../Button";
import TextField from "../TextField";
import { FormWrapper, FormLoading, FormError, FormSuccess } from "../Form";
import React, { useState } from "react";
import { FieldErrors, forgotValidate } from "../../utils/validations";
import { useRouter } from "next/router";

const FormForgotPassword = () => {
  const router = useRouter();
  const { email } = router.query;
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [values, setValues] = useState({
    email: (email as string) || ""
  });
  const [loading, setLoading] = useState(false);

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const errors = forgotValidate(values);

    if (Object.keys(errors).length) {
      setFieldError(errors);
      setLoading(false);
      return;
    }

    setFieldError({});

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`,
      {
        method: "POST",
        body: JSON.stringify({
          email: values.email
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    const data = await response.json();
    setLoading(false);

    if (data.error) {
      setFormError(data.error.message);
    } else {
      setSuccess(true);
    }
  };

  return (
    <FormWrapper>
      {success ? (
        <FormSuccess>
          <CheckCircle /> You just received an email!
        </FormSuccess>
      ) : (
        <>
          {!!formError && (
            <FormError>
              <Error /> {formError}
            </FormError>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              onInputChange={(v) => handleInput("email", v)}
              initialValue={email as string}
              name="email"
              placeholder="Email"
              type="text"
              error={fieldError?.email}
              icon={<Email />}
            />
            <Button type="submit" size="large" fullWidth disabled={loading}>
              {loading ? <FormLoading /> : <span>Send email</span>}
            </Button>
          </form>
        </>
      )}
    </FormWrapper>
  );
};

export default FormForgotPassword;
