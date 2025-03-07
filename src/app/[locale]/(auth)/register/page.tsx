import RegisterForm from "@/components/Auth/RegisterForm";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FaHouse } from "react-icons/fa6";

const RegisterPage = () => {
  const t = useTranslations("RegisterPage");

  return (
    <div className="container my-8 flex h-fit flex-col justify-between gap-6">
      <div className="flex items-center justify-between gap-3 opacity-80">
        <span className="p-2 text-xl font-bold">{t("label")}</span>
        <Link
          href="/"
          className="rounded-full p-2 duration-200 hover:text-primary"
        >
          <FaHouse className="size-5" />
        </Link>
      </div>
      <div className="w-full border ring-gray-500"></div>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
