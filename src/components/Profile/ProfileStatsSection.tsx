import { IoStatsChart } from "react-icons/io5";
import ProgressCard from "../Card/ProgressCard";
import { tiers, vipCardInfo } from "@/data/vipData";

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

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center gap-3 text-xl font-bold opacity-80">
        <IoStatsChart />
        <h2>Statistics</h2>
      </div>
      <ProgressCard
        tier={currentTier}
        nextTier={nextTier}
        amount={vipCardInfo[currentTierIndex].amount}
        benefits={vipCardInfo[currentTierIndex].benefits}
        username={mockUserData.username}
        registration={mockUserData.registration}
        progress={mockUserData.progress}
      />
    </section>
  );
};

export default ProfileStatsSection;
