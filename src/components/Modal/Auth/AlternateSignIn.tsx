import { FaApple, FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/slices/authModalSlice";
import { useTranslations } from "next-intl";

interface AlternateSignInProps {
  from: "login" | "register";
}

const AlternateSignIn = ({ from }: AlternateSignInProps) => {
  const t = useTranslations("Modal.AlternateSignIn");

  const dispatch = useDispatch();
  const handleRegisterClick = () => {
    if (from === "login") {
      dispatch(openModal("register"));
    } else {
      dispatch(openModal("login"));
    }
  };

  return (
    <div className="my-4 flex flex-col items-center justify-center gap-3">
      <div className="flex w-full items-center justify-center gap-2">
        <div className="h-0.5 w-full rounded-full bg-card"></div>
        <span className="text-sm">{t("or")}</span>
        <div className="h-0.5 w-full rounded-full bg-card"></div>
      </div>

      <div className="flex items-center gap-3">
        <div className="cursor-pointer rounded bg-card p-2">
          <FcGoogle className="size-6" />
        </div>
        <div className="cursor-pointer rounded bg-card p-2">
          <FaApple className="size-6" />
        </div>
        <div className="cursor-pointer rounded bg-card p-2">
          <FaFacebook className="size-6 text-[#1877F2]" />
        </div>
      </div>

      <div className="flex items-center gap-1 text-sm opacity-80">
        <span>{from === "login" ? t("noAccount") : t("haveAccount")}</span>
        <button
          onClick={handleRegisterClick}
          className="cursor-pointer font-bold hover:underline"
        >
          {from === "login" ? t("registerAccount") : t("loginAccount")}
        </button>
      </div>
    </div>
  );
};

export default AlternateSignIn;
