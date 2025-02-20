import { FaArrowRight, FaCircleCheck, FaSackDollar } from "react-icons/fa6";
import { TbDiamondFilled } from "react-icons/tb";
import MedalIcon from "../Vip/MedalIcon";
import { useTranslations } from "next-intl";
import { getBgColorClass, getTextColorClass } from "@/utils/vipTierColorUtil";
import { vipCardInfo } from "@/data/vipData";

interface ProgressCardProps {
  tier: string;
  nextTier: string | null;
  username: string;
  registration: string;
  progress: number;
}

const ProgressCard = ({
  tier,
  nextTier,
  username,
  registration,
  progress,
}: ProgressCardProps) => {
  const t = useTranslations("ProfilePage.Overview.Stats");
  const vipT = useTranslations("VipInfo");

  const tierData = vipCardInfo.find((t) => t.tier === tier);
  if (!tierData) return null;

  const tierName = vipT(`Tiers.${tier}`);
  const amount = vipT(tierData.amount);

  return (
    <div className="rounded-lg shadow-md">
      {/* Progress card header */}
      <div className="rounded-t-lg bg-card p-6">
        <div className="flex flex-col justify-center gap-2">
          <h3 className="text-lg font-bold opacity-80">{username}</h3>
          <p className="text-sm opacity-60">
            {t("joined")} <span className="font-bold">{registration}</span>
          </p>
        </div>
      </div>

      {/* Progress card content */}
      <div className="flex flex-col gap-8 rounded-b-lg bg-foreground p-6 text-white">
        {/* Content Top - Tier, Medal icon, and main benefit */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-6">
            <div
              className={`rounded px-1 text-sm font-medium ${getBgColorClass(tier)}`}
            >
              {tierName}
            </div>
            <MedalIcon className={`${getTextColorClass(tier)} size-10`} />
          </div>
          <div>
            <div className="mb-1 flex items-center gap-2">
              <FaSackDollar className={`size-6 ${getTextColorClass(tier)}`} />
              <span className="text-2xl font-bold">{amount}</span>
            </div>
            <p className="text-sm opacity-60">
              {vipT("Benefits.dailyWithdrawAmount")}
            </p>
          </div>
        </div>

        {/* Benefits list */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
          {tierData.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <FaCircleCheck className={`size-4 ${getTextColorClass(tier)}`} />
              <span>
                {vipT(`Benefits.${benefit.key}`)}: {vipT(benefit.value)}
              </span>
            </div>
          ))}
        </div>

        {/* Progress line section */}
        <div className="text-sm">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
            <div className="flex cursor-pointer items-center gap-2 rounded p-2 duration-200 hover:bg-white/10">
              <p>{t("upgrade")}</p>
              <FaArrowRight className={`size-5 ${getTextColorClass(tier)}`} />
            </div>
            <div className="flex items-center gap-1 p-2">
              <p>{t("currentPoint")}:</p>
              <div className="flex gap-1">
                <TbDiamondFilled
                  className={`size-5 ${getTextColorClass(tier)}`}
                />
                <p>{progress}</p>
              </div>
            </div>
          </div>

          <div className="my-2 h-1 w-full rounded-full bg-white/10">
            {/* Filled progress bar */}
            <div
              className={`${getBgColorClass(tier)} h-full rounded-full`}
              style={{ width: `${(progress / 1000) * 100}%` }}
            />
          </div>

          {/* Display current and next tier */}
          <div className="flex items-center justify-between">
            {/* Current Tier */}
            <div className="flex items-center gap-1">
              <MedalIcon className={`${getTextColorClass(tier)} size-5`} />
              <p className="opacity-30">{tierName}</p>
            </div>

            {/* Next Tier (if exists) */}
            {nextTier ? (
              <div className="flex items-center gap-1">
                <MedalIcon
                  className={`${getTextColorClass(nextTier)} size-5`}
                />
                <p className="opacity-30">{vipT(`Tiers.${nextTier}`)}</p>
              </div>
            ) : (
              <p className="opacity-30">{t("maxTierReached")}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
