import FormResetPassword from "../components/FormResetPassword";
import Auth from "../templates/Auth";
import React from "react";

export default function ResetPassword() {
  return (
    <Auth title="Reset password">
      <FormResetPassword />
    </Auth>
  );
}
