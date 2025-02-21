import {
  FaHandHoldingDollar,
  FaHourglassHalf,
  FaMoneyBillWave,
  FaRotateRight,
  FaSackDollar,
} from "react-icons/fa6";
import InfoCard from "@/components/Card/InfoCard";
import { useTranslations } from "next-intl";

const RulesSection = () => {
  const t = useTranslations("AffiliatePage.Overview.CommissionRules");

  const COMMISSION_RULES = [
    {
      icon: <FaRotateRight size={40} />,
      title: t("turnoverRequirementTitle"),
      description: t("turnoverRequirementDescription"),
    },
    {
      icon: <FaMoneyBillWave size={40} />,
      title: t("minimumWithdrawalTitle"),
      description: t("minimumWithdrawalDescription"),
    },
    {
      icon: <FaHandHoldingDollar size={40} />,
      title: t("maxDailyCommissionTitle"),
      description: t("maxDailyCommissionDescription"),
    },
    {
      icon: <FaSackDollar size={40} />,
      title: t("eligibleDepositsTitle"),
      description: t("eligibleDepositsDescription"),
    },
    {
      icon: <FaHourglassHalf size={40} />,
      title: t("calculationTimeTitle"),
      description: t("calculationTimeDescription"),
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{t("label")}</h2>
      <p>{t("description")}</p>

      {COMMISSION_RULES.map((rule, index) => (
        <InfoCard
          key={index}
          icon={rule.icon}
          title={rule.title}
          description={rule.description}
        />
      ))}
    </section>
  );
};

export default RulesSection;
