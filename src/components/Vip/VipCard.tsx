import { FaCircleCheck, FaSackDollar } from "react-icons/fa6";
import MedalIcon from "./MedalIcon";
import { getBgColorClass, getTextColorClass } from "@/utils/vipTierColorUtil";

interface VipCardProps {
  tier: string;
  amount: string;
  benefits: string[];
}

const VipCard = ({ tier, amount, benefits }: VipCardProps) => {
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
          {tier}
        </div>
        <div className="mb-1 flex items-center gap-2">
          <span>
            <FaSackDollar className={`size-6 ${getTextColorClass(tier)}`} />
          </span>
          <span className="text-2xl font-bold">{amount}</span>
        </div>
        <p className="mb-3 text-sm opacity-60">Daily withdraw amount</p>

        {/* Benefits list */}
        <div className="flex flex-col gap-3 text-sm">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className={`size-4 ${getTextColorClass(tier)}`}>
                <FaCircleCheck />
              </span>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VipCard;
