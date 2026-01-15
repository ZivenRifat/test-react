import React, { useState } from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormSignUp from "../components/Fragments/FormSignUp";
import AppSnackbar from "../components/Elements/AppSnackBar";

function SignUpPage() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  return (
    <AuthLayouts>
      <FormSignUp
        onSuccess={(msg) =>
          setSnackbar({ open: true, message: msg, severity: "success" })
        }
        onError={(msg) =>
          setSnackbar({ open: true, message: msg, severity: "error" })
        }
      />

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      />
    </AuthLayouts>
  );
}

export default SignUpPage;
