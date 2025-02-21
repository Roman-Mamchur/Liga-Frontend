import {
  FaBolt,
  FaChartLine,
  FaCoins,
  FaGlobe,
  FaInfinity,
  FaSliders,
} from "react-icons/fa6";
import InfoCard from "@/components/Card/InfoCard";
import { useTranslations } from "next-intl";

const AdvantagesSection = () => {
  const t = useTranslations("AffiliatePage.Overview.Advantages");

  const ADVANTAGES = [
    {
      icon: <FaBolt size={40} />,
      title: t("instantPayoutTitle"),
      description: t("instantPayoutDescription"),
    },
    {
      icon: <FaInfinity size={40} />,
      title: t("lifetimeCommissionTitle"),
      description: t("lifetimeCommissionDescription"),
    },
    {
      icon: <FaChartLine size={40} />,
      title: t("marketLeadingValueTitle"),
      description: t("marketLeadingValueDescription"),
    },
    {
      icon: <FaSliders size={40} />,
      title: t("customCommissionTitle"),
      description: t("customCommissionDescription"),
    },
    {
      icon: <FaCoins size={40} />,
      title: t("cryptoLocalCurrenciesTitle"),
      description: t("cryptoLocalCurrenciesDescription"),
    },
    {
      icon: <FaGlobe size={40} />,
      title: t("multiLanguageSupportTitle"),
      description: t("multiLanguageSupportDescription"),
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{t("label")}</h2>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {ADVANTAGES.map((rule, index) => (
          <InfoCard
            key={index}
            icon={rule.icon}
            title={rule.title}
            description={rule.description}
          />
        ))}
      </div>
    </section>
  );
};

export default AdvantagesSection;
