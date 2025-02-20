import { useTranslations } from "next-intl";
import { FaCoins } from "react-icons/fa6";
import { SiBitcoin } from "react-icons/si";

const ProfileTotalBets = () => {
  const t = useTranslations("ProfilePage.Overview.TotalBets");

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3 text-xl font-bold opacity-80">
        <FaCoins />
        <h2>{t("label")}</h2>
      </div>
      <div className="flex flex-col gap-3 rounded bg-card px-6 py-4 shadow-md">
        <div className="flex items-center justify-between gap-3 overflow-x-auto rounded-sm bg-background px-4 py-2 text-sm">
          <p className="text-nowrap opacity-60">{t("depositTurnover")}:</p>
          <div className="flex items-center gap-1">
            <span className="opacity-60">0.00000000</span>
            <SiBitcoin className="rounded-full bg-white text-[#F7931A]" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 overflow-x-auto rounded-sm bg-background px-4 py-2 text-sm">
          <p className="text-nowrap opacity-60">{t("totalBets")}:</p>
          <div className="flex items-center gap-1">
            <span className="opacity-60">0.00000000</span>
            <SiBitcoin className="rounded-full bg-white text-[#F7931A]" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 overflow-x-auto rounded-sm bg-background px-4 py-2 text-sm">
          <p className="text-nowrap opacity-60">{t("totalWins")}:</p>
          <div className="flex items-center gap-1">
            <span className="opacity-60">0.00000000</span>
            <SiBitcoin className="rounded-full bg-white text-[#F7931A]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTotalBets;
