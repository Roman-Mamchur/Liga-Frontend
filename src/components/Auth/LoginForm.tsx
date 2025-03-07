"use client";

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AlternateSignIn from "./AlternateSignIn";
import { useTranslations } from "next-intl";

const LoginForm = () => {
  const t = useTranslations("Modal");
  const formikT = useTranslations("Formik.Login");

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={Yup.object({
          username: Yup.string().required(formikT("usernameOrEmail.required")),
          password: Yup.string()
            .min(8, formikT("password.invalid"))
            .required(formikT("password.required")),
        })}
        onSubmit={(values) => console.log("Login Submitted", values)}
      >
        {({ isSubmitting }) => (
          <Form className="flex w-full flex-col gap-4">
            <div>
              <label>{t("Login.emailOrUsernameLabel")}</label>
              <Field
                type="text"
                name="username"
                className="w-full rounded border px-3 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <ErrorMessage
                name="username"
                component="p"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            <div>
              <label>{t("Login.passwordLabel")}</label>
              <div className="relative">
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="password"
                  className="w-full rounded border px-3 py-2 pr-10 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              <ErrorMessage
                name="password"
                component="p"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-full rounded bg-primary py-2 text-white shadow-md duration-200 hover:bg-secondary disabled:opacity-50"
            >
              {isSubmitting ? t("Login.logging") : t("Login.login")}
            </button>

            <AlternateSignIn from="login" />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
