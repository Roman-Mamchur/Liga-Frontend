"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { QRCodeCanvas } from "qrcode.react";
import AuthCode from "../Profile/AuthCode";
import { useTranslations } from "next-intl";

const SecuritySettingsDropdown = () => {
  const t = useTranslations("ProfilePage.Settings.Security");

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const [showPassword, setShowPassword] = useState<{
    old: boolean;
    new: boolean;
    confirm: boolean;
    confirmTwoFactor: boolean;
  }>({
    old: false,
    new: false,
    confirm: false,
    confirmTwoFactor: false,
  });

  const togglePasswordVisibility = (
    field: "old" | "new" | "confirm" | "confirmTwoFactor",
  ) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const mockAuthCode = "H5RXOYRJFZZWIOLUEZBVGUTCJZFVEUDJKVRTM43THRIXSN32MEQQ";
  const qrValue = `otpauth://totp/MyApp?secret=${mockAuthCode}&issuer=MyApp`;

  return (
    <div className="flex flex-col rounded shadow-md">
      {/* Header */}
      <div
        className={`flex cursor-pointer items-center justify-between rounded bg-card px-6 py-3 ${
          isOpen ? "rounded-b-none border-b border-black/20" : ""
        }`}
        onClick={toggleDropdown}
      >
        <div className="flex items-center gap-3">
          <FiLock />
          <h3 className="text-sm font-bold">{t("label")}</h3>
        </div>
        <div
          className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          <FaChevronDown />
        </div>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="flex flex-col gap-6 rounded-b bg-card p-6">
          {/* Password Section */}
          <form className="rounded bg-white/50 px-6 py-3">
            <div className="divide-y">
              <div className="py-3">
                <h3 className="text-xl font-bold opacity-80">
                  {t("Password.label")}
                </h3>
              </div>

              {/* Passwords Inputs */}
              <div className="flex flex-col gap-4 py-3">
                {[
                  {
                    label: t("Password.oldPasswordInputLabel"),
                    field: "old" as const,
                  },
                  {
                    label: t("Password.newPasswordInputLabel"),
                    field: "new" as const,
                  },
                  {
                    label: t("Password.confirmNewPasswordInputLabel"),
                    field: "confirm" as const,
                  },
                ].map(({ label, field }) => (
                  <div key={field} className="flex flex-col gap-2">
                    <label className="text-sm">{label}</label>
                    <div className="relative">
                      <input
                        type={showPassword[field] ? "text" : "password"}
                        className="w-full rounded border px-3 py-2 pr-10 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility(field)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword[field] ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end py-3">
                <button className="w-full rounded bg-primary px-4 py-2 text-sm text-white shadow-md duration-200 hover:scale-105 hover:bg-secondary md:w-auto">
                  {t("Password.button")}
                </button>
              </div>
            </div>
          </form>

          {/* Two Factor Section */}
          <form className="rounded bg-white/50 px-6 py-3">
            <div className="divide-y">
              <div className="flex flex-col gap-2 py-3">
                <h3 className="text-xl font-bold opacity-80">
                  {t("2FA.label")}
                </h3>
                <span className="text-xs opacity-60">
                  {t("2FA.description")}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 py-3">
                {/* Auth Code */}
                <div className="flex flex-col gap-4 py-3">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm">{t("2FA.authCodeLabel")}</p>
                    <AuthCode authCode={mockAuthCode} />
                  </div>
                </div>

                {/* QR Code */}
                <div className="flex flex-col gap-4 py-3">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm">{t("2FA.qrLabel")}</p>
                    <QRCodeCanvas
                      value={qrValue}
                      size={150}
                      className="rounded-lg border-2 border-card bg-white p-2"
                    />
                  </div>
                </div>

                {/* Two Factor Password Confirmation */}
                <div className="flex flex-col gap-4 py-3">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm">{t("2FA.passwordLabel")}</p>
                    <div className="relative">
                      <input
                        type={
                          showPassword.confirmTwoFactor ? "text" : "password"
                        }
                        className="w-full rounded border px-3 py-2 pr-10 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          togglePasswordVisibility("confirmTwoFactor")
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword.confirmTwoFactor ? (
                          <FiEyeOff />
                        ) : (
                          <FiEye />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Two Factor Code Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm">{t("2FA.codeLabel")}</label>
                  <input
                    type="text"
                    className="rounded border px-3 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex justify-end py-3">
                <button className="w-full rounded bg-primary px-4 py-2 text-sm text-white shadow-md duration-200 hover:scale-105 hover:bg-secondary md:w-auto">
                  {t("2FA.button")}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SecuritySettingsDropdown;
