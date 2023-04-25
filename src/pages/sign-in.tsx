import FormSignIn from "../components/FormSignIn";
import Auth from "../templates/Auth";
import React from "react";

export default function SignIn() {
  return (
    <Auth title="Sign In">
      <FormSignIn />
    </Auth>
  );
}
