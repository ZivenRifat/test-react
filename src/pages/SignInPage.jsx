import React from "react";
import AuthLayout from "../components/Layouts/AuthLayouts";
import FormSignIn from "../components/Fragments/FormSignIn";
import { loginService } from "../services/authService";
import { AuthContext } from "../context/authContext";
import { useState } from "react";
import AppSnackbar from "../components/Elements/AppSnackBar";

function SignInPage() {
  const { login } = React.useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleLogin = async (email, password) => {
    try {
      const { refreshToken } = await loginService(email, password);

      login(refreshToken);
    } catch (err) {
      setSnackbar({ open: true, message: err.msg, severity: "error" });
    }
  };

  return (
    <AuthLayout>
      <FormSignIn onSubmit={handleLogin} />
      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </AuthLayout>
  );
}
export default SignInPage;
