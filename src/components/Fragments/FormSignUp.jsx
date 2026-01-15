import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name wajib diisi"),
  email: Yup.string()
    .email("Email tidak valid")
    .required("Email wajib diisi"),
  password: Yup.string()
    .min(6, "Password minimal 6 karakter")
    .required("Password wajib diisi"),
});

function FormSignUp({ onSuccess, onError }) {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="flex justify-center mt-5">
        <p className="text-lg font-semibold mt-3">Create an account</p>
      </div>

      <div className="mt-10">
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={RegisterSchema}
          onSubmit={async (values, { resetForm }) => {
            setLoading(true);
            try {
              const res = await axios.post(
                "https://jwt-auth-eight-neon.vercel.app/register",
                values
              );
              onSuccess(res.data.message || "Register berhasil");
              resetForm();
            } catch (err) {
              onError(
                err.response?.data?.message ||
                  "Email sudah pernah terdaftar"
              );
            } finally {
              setLoading(false);
            }
          }}
        >
          {() => (
            <Form>
              {/* NAME */}
              <div className="mb-6">
                <Field
                  name="name"
                  as={LabeledInput}
                  label="Name"
                  type="text"
                  placeholder="Full Name"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* EMAIL */}
              <div className="mb-6">
                <Field
                  name="email"
                  as={LabeledInput}
                  label="Email Address"
                  type="email"
                  placeholder="hello@example.com"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* PASSWORD */}
              <div className="mb-6">
                <Field
                  name="password"
                  as={LabeledInput}
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <p className="text-xs text-gray-500 mb-3">
                By continuing, you agree to our{" "}
                <span className="text-teal-600">terms of service</span>.
              </p>

              <Button type="submit" disabled={loading}>
                {loading ? "Loading..." : "Register"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="my-9 px-7 flex flex-col justify-center items-center text-xs text-gray-03">
        <div className="border border-gray-05 w-full"></div>
        <div className="px-2 bg-special-mainBg absolute">
          or sign up with
        </div>
      </div>

      <div className="mb-8">
        <Button type="button" variant="secondary">
          Continue with Google
        </Button>
      </div>

      <p className="text-center text-sm mt-6">
        Already have an account?{" "}
        <Link to="/login" className="text-teal-600 font-medium">
          Sign in here
        </Link>
      </p>
    </>
  );
}

export default FormSignUp;
