import HistoryTable from "@/components/Table/HistoryTable";
import { useTranslations } from "next-intl";
import { FaHistory } from "react-icons/fa";

const ProfileHistoryPage = () => {
  const t = useTranslations("ProfilePage.History");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 text-xl font-bold opacity-80">
        <FaHistory />
        <h1>{t("label")}</h1>
      </div>
      <HistoryTable />
    </div>
  );
};

export default ProfileHistoryPage;
