import RedeemsTable from "@/components/Table/RedeemsTable";
import { useTranslations } from "next-intl";
import { FaTicket } from "react-icons/fa6";

const ProfileRedeemsPage = () => {
  const t = useTranslations("ProfilePage.Redeems");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 text-xl font-bold opacity-80">
        <FaTicket />
        <h1>{t("label")}</h1>
      </div>
      <RedeemsTable />
    </div>
  );
};

export default ProfileRedeemsPage;
