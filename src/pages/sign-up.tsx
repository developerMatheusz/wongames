import FormSignUp from "../components/FormSignUp";
import Auth from "../templates/Auth";
import React from "react";

export default function SignUp() {
  return (
    <Auth title="Sign Up">
      <FormSignUp />
    </Auth>
  );
}
