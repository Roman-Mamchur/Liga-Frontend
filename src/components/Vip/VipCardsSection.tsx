import { tiers, vipCardInfo } from "@/data/vipData";
import VipCard from "./VipCard";
import { useTranslations } from "next-intl";

const VipCardsSection = () => {
  const t = useTranslations("VipPage");
  const vipT = useTranslations("VipInfo");

  return (
    <section className="flex">
      <div className="w-0 flex-1">
        <h1 className="mb-8 text-2xl font-bold">{t("title")}</h1>
        <div className="dark-scrollbar flex flex-nowrap gap-1 overflow-x-auto scroll-smooth pb-3">
          {vipCardInfo.map((medal, index) => (
            <VipCard
              key={index}
              tier={tiers[index]}
              tierName={vipT(`Tiers.${tiers[index]}`)}
              amount={vipT(medal.amount)}
              benefits={medal.benefits.map((benefit) => ({
                key: vipT(`Benefits.${benefit.key}`),
                value: vipT(benefit.value),
              }))}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VipCardsSection;
