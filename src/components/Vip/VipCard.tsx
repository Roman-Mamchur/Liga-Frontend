import { FaCircleCheck, FaSackDollar } from "react-icons/fa6";
import MedalIcon from "./MedalIcon";
import { getBgColorClass, getTextColorClass } from "@/utils/vipTierColorUtil";

interface VipCardProps {
  tier: string;
  tierName: string;
  amount: string;
  benefits: { key: string; value: string }[];
}

const VipCard = ({ tier, tierName, amount, benefits }: VipCardProps) => {
  return (
    <div className="flex flex-col gap-3">
      {/* Line with medal*/}
      <div className="flex items-center gap-1">
        <div className="rounded-full bg-foreground p-3">
          <MedalIcon className={`size-10 ${getTextColorClass(tier)}`} />
        </div>
        <div className="h-1 flex-1 rounded-full bg-foreground"></div>
      </div>

      {/* Content */}
      <div className="text-nowrap rounded-lg bg-foreground p-6 text-white">
        {/* Tier */}
        <div
          className={`mb-4 w-fit rounded px-1 text-sm font-medium ${getBgColorClass(tier)}`}
        >
          {tierName}
        </div>
        <div className="mb-1 flex items-center gap-2">
          <FaSackDollar className={`size-6 ${getTextColorClass(tier)}`} />
          <span className="text-2xl font-bold">{amount}</span>
        </div>
        <p className="mb-3 text-sm opacity-60">Daily withdraw amount</p>

        {/* Benefits list */}
        <div className="flex flex-col gap-3 text-sm">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <FaCircleCheck className={`size-4 ${getTextColorClass(tier)}`} />
              <span>
                {benefit.key}: {benefit.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VipCard;
