import { IoStatsChart } from "react-icons/io5";
import ProgressCard from "../Card/ProgressCard";
import { tiers } from "@/data/vipData";
import { useTranslations } from "next-intl";

const ProfileStatsSection = () => {
  const mockUserData = {
    username: "John Doe",
    registration: "24 Dec 2024",
    progress: 800,
  };

  const currentTierIndex = 0;
  const currentTier = tiers[currentTierIndex];
  const nextTier =
    currentTierIndex < tiers.length - 1 ? tiers[currentTierIndex + 1] : null;

  const t = useTranslations("ProfilePage.Overview.Stats");

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center gap-3 text-xl font-bold opacity-80">
        <IoStatsChart />
        <h2>{t("label")}</h2>
      </div>
      <div className="flex">
        <div className="w-0 flex-1">
          <ProgressCard
            tier={currentTier}
            nextTier={nextTier}
            username={mockUserData.username}
            registration={mockUserData.registration}
            progress={mockUserData.progress}
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileStatsSection;
