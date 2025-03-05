"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaXmark } from "react-icons/fa6";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { DateOfBirthPicker } from "../../Dropdown/DateOfBirthPicker";
import { countryCodes } from "@/data/countryCodeData";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/store/slices/authModalSlice";
import { RootState } from "@/store";
import { differenceInYears } from "date-fns";
import AlternateSignIn from "./AlternateSignIn";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { modalMotion, motionVariants, overlayMotion } from "@/utils/framerUtil";

const RegisterModal = () => {
  const t = useTranslations("Modal.Register");
  const formikT = useTranslations("Formik.Register");

  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: RootState) => state.authModal.modalType === "register",
  );

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState(
    countryCodes[0].code,
  );
  const [phoneNumber, setPhoneNumber] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isFinalStepSubmitting, setIsFinalStepSubmitting] = useState(false);

  const closeModalHandler = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
    if (field === "password") {
      setShowPassword((prev) => !prev);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword((prev) => !prev);
    }
  };

  const handleEscPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModalHandler();
      }
    },
    [closeModalHandler],
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", handleEscPress);
    return () => {
      window.removeEventListener("keydown", handleEscPress);
    };
  }, [isOpen, handleEscPress]);

  const handleNextStep = () => {
    setCurrentStep(2);
  };

  const handlePrevStep = () => {
    setCurrentStep(1);
  };

  interface FormValues {
    email: string;
    username: string;
    password: string;
    state: string;
    dateOfBirth: string;
    phone?: string;
    code?: string;
  }

  const handleSubmit = (values: FormValues) => {
    if (currentStep === 1) {
      handleNextStep();
    } else {
      setIsFinalStepSubmitting(true);
      console.log("Register Submitted", values);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center md:bg-black/80"
          onClick={(event) =>
            event.target === event.currentTarget && closeModalHandler()
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
                priority={true}
                className="h-10 w-auto"
              />
              <button
                className="text-gray-500 duration-200 hover:text-gray-800"
                onClick={closeModalHandler}
              >
                <FaXmark className="size-5" />
              </button>
            </div>
            <div className="w-full border ring-gray-500"></div>

            <Formik
              initialValues={{
                email: "",
                username: "",
                password: "",
                confirmPassword: "",
                state: "",
                dateOfBirth: "",
                phone: "",
                code: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email(formikT("email.invalid"))
                  .required(formikT("email.required")),
                username: Yup.string().required(formikT("username.required")),
                password: Yup.string()
                  .min(8, formikT("password.invalid"))
                  .required(formikT("password.required")),
                confirmPassword: Yup.string()
                  .oneOf(
                    [Yup.ref("password"), undefined],
                    formikT("confirmPassword.mismatch"),
                  )
                  .required(formikT("confirmPassword.required")),
                dateOfBirth: Yup.string()
                  .required(formikT("dateOfBirth.required"))
                  .test("age", formikT("dateOfBirth.invalid"), (value) => {
                    // Check if the user is at least 18 years old
                    if (!value) return false;
                    const dateOfBirth = new Date(value);
                    const age = differenceInYears(new Date(), dateOfBirth);
                    return age >= 18;
                  }),
                phone: Yup.number().optional(),
                code: Yup.string().optional(),
              })}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="flex flex-col gap-4 overflow-y-auto p-8">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-1">
                      <div className="h-1.5 flex-1 animate-pulse rounded-full bg-green-500"></div>
                      {currentStep === 1 ? (
                        <div className="h-1.5 flex-1 rounded-full bg-card"></div>
                      ) : (
                        <div className="h-1.5 flex-1 animate-pulse rounded-full bg-green-500"></div>
                      )}
                    </div>
                    <div className="flex justify-end">
                      <p>
                        {t("step")} {currentStep}/2
                      </p>
                    </div>
                  </div>
                  <h1 className="text-2xl font-bold">{t("title")}</h1>

                  {/* Step 1 - Registration Form */}
                  {currentStep === 1 && (
                    <>
                      <div>
                        <label>{t("emailLabel")}</label>
                        <Field
                          type="email"
                          name="email"
                          placeholder="email@example.com"
                          className="w-full rounded border px-3 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <ErrorMessage
                          name="email"
                          component="p"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>

                      <div>
                        <label>{t("usernameLabel")}</label>
                        <Field
                          type="text"
                          name="username"
                          placeholder="John Doe"
                          className="w-full rounded border px-3 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <ErrorMessage
                          name="username"
                          component="p"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>

                      <div>
                        <label>{t("passwordLabel")}</label>
                        <div className="relative">
                          <Field
                            type={showPassword ? "text" : "password"}
                            name="password"
                            autoComplete="password"
                            className="w-full rounded border px-3 py-2 pr-10 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                          <button
                            type="button"
                            onClick={() => togglePasswordVisibility("password")}
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

                      <div>
                        <label>{t("confirmPasswordLabel")}</label>
                        <div className="relative">
                          <Field
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            autoComplete="confirm-password"
                            className="w-full rounded border px-3 py-2 pr-10 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              togglePasswordVisibility("confirmPassword")
                            }
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          >
                            {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                          </button>
                        </div>
                        <ErrorMessage
                          name="confirmPassword"
                          component="p"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>

                      <div>
                        <label>{t("dateOfBirthLabel")}</label>
                        <Field
                          name="dateOfBirth"
                          component={DateOfBirthPicker}
                          placeholder={t("dateOfBirthPlaceholder")}
                        />
                        <ErrorMessage
                          name="dateOfBirth"
                          component="p"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>

                      <div>
                        <label>{t("phoneLabel")}</label>
                        <div className="flex items-center gap-2">
                          <div className="relative w-24">
                            <select
                              value={selectedCountryCode}
                              onChange={(e) =>
                                setSelectedCountryCode(e.target.value)
                              }
                              className="w-full cursor-pointer appearance-none rounded border bg-white px-3 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                              {countryCodes.map((item) => (
                                <option key={item.code} value={item.code}>
                                  {item.code}
                                </option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                              <FaChevronDown className="size-3 text-gray-500" />
                            </div>
                          </div>
                          <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder={t("phonePlaceholder")}
                            className="flex-1 rounded border px-3 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <label>{t("referralCodeLabel")}</label>
                        <Field
                          type="text"
                          name="code"
                          className="w-full rounded border px-3 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <ErrorMessage
                          name="code"
                          component="p"
                          className="mt-1 text-sm text-red-500"
                        />
                      </div>

                      <button
                        type="submit"
                        className="mt-4 w-full rounded bg-primary py-2 text-white shadow-md duration-200 hover:bg-secondary"
                      >
                        {t("continue")}
                      </button>

                      <AlternateSignIn from="register" />
                    </>
                  )}

                  {/* Step 2 - Terms and Conditions */}
                  {currentStep === 2 && (
                    <>
                      <div className="space-y-1 overflow-y-auto rounded bg-card p-2">
                        <h3 className="font-bold">{t("termsTitle")}</h3>

                        <p className="text-sm text-gray-500">
                          Terms and conditions text in here
                        </p>
                      </div>

                      <div className="mt-4 flex items-center">
                        <input
                          type="checkbox"
                          id="acceptTerms"
                          checked={acceptedTerms}
                          className="p-2 accent-orange-600"
                          onChange={() => setAcceptedTerms((prev) => !prev)}
                        />
                        <label htmlFor="acceptTerms" className="ml-2">
                          {t("termsCheck")}
                        </label>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <button
                          onClick={handlePrevStep}
                          className="mt-4 w-full rounded bg-card py-2 shadow-md duration-200 hover:bg-accentOpacity disabled:opacity-50"
                        >
                          {t("back")}
                        </button>

                        <button
                          type="submit"
                          disabled={isFinalStepSubmitting || !acceptedTerms}
                          className="mt-4 w-full rounded bg-primary py-2 text-white shadow-md duration-200 hover:bg-secondary disabled:opacity-50"
                        >
                          {isFinalStepSubmitting
                            ? t("registering")
                            : t("register")}
                        </button>
                      </div>
                    </>
                  )}
                </Form>
              )}
            </Formik>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegisterModal;
