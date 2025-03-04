"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { FaXmark } from "react-icons/fa6";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/store/slices/authModalSlice";
import { RootState } from "@/store";
import AlternateSignIn from "./AlternateSignIn";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { modalMotion, motionVariants, overlayMotion } from "@/utils/framerUtil";

const LoginModal = () => {
  const t = useTranslations("Modal");
  const formikT = useTranslations("Formik.Login");

  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: RootState) => state.authModal.modalType === "login",
  );

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleEscPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dispatch(closeModal());
      }
    },
    [dispatch],
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", handleEscPress);
    return () => {
      window.removeEventListener("keydown", handleEscPress);
    };
  }, [isOpen, handleEscPress]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center md:bg-black/80"
          onClick={(event) =>
            event.target === event.currentTarget && dispatch(closeModal())
          }
          key="overlay"
          {...motionVariants}
          variants={overlayMotion}
        >
          <motion.div
            className="relative flex h-full w-full flex-col bg-white shadow-lg md:max-h-[90vh] md:w-8/12 md:rounded-lg lg:w-6/12"
            key="modal"
            {...motionVariants}
            variants={modalMotion}
          >
            <div className="flex items-center justify-between p-4">
              <Image
                src="/logo.png"
                alt="Logo"
                width={0}
                height={0}
                sizes="100vw"
                priority
                className="h-10 w-auto"
              />
              <button
                className="text-gray-500 duration-200 hover:text-gray-800"
                onClick={() => dispatch(closeModal())}
              >
                <span className="hidden md:block">{t("exit")}</span>
                <FaXmark className="size-5 md:hidden" />
              </button>
            </div>
            <div className="w-full border ring-gray-500"></div>

            <Formik
              initialValues={{ username: "", password: "" }}
              validationSchema={Yup.object({
                username: Yup.string().required(
                  formikT("usernameOrEmail.required"),
                ),
                password: Yup.string()
                  .min(8, formikT("password.invalid"))
                  .required(formikT("password.required")),
              })}
              onSubmit={(values) => console.log("Login Submitted", values)}
            >
              {({ isSubmitting }) => (
                <Form className="my-4 flex flex-col gap-4 overflow-y-auto px-8">
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
