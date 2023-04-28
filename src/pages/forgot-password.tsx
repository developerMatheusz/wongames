import FormForgotPassword from "../components/FormForgotPassword";
import Auth from "../templates/Auth";
import React from "react";

export default function ForgotPassword() {
  return (
    <Auth title="Request new password">
      <FormForgotPassword />
    </Auth>
  );
}
