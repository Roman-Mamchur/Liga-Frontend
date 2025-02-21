import PointsTable from "@/components/Table/PointsTable";
import { useTranslations } from "next-intl";
import { FaStar } from "react-icons/fa6";

const ProfilePointsPage = () => {
  const t = useTranslations("ProfilePage.Points");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 text-xl font-bold opacity-80">
        <FaStar />
        <h1>{t("label")}</h1>
      </div>
      <PointsTable />
    </div>
  );
};

export default ProfilePointsPage;
