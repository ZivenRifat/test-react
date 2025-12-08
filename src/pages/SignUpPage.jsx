import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormSignUp from "../components/Fragments/FormSignUp";

function SignUpPage() {
  return (
    <AuthLayouts>
      <FormSignUp />
    </AuthLayouts>
  );
}

export default SignUpPage;
