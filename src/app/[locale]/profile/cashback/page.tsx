import CashbackTable from "@/components/Table/CashbackTable";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const ProfileCashbackPage = () => {
  const t = useTranslations("ProfilePage.Cashback");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 text-xl font-bold opacity-80">
        <FaHandHoldingDollar />
        <h1>{t("label")}</h1>
      </div>
      <CashbackTable />
    </div>
  );
};

export default ProfileCashbackPage;
