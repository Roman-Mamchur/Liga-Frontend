import React from "react";
import { FaLevelUpAlt, FaUndoAlt } from "react-icons/fa";
import { FaGift, FaRocket, FaUserTie } from "react-icons/fa6";
import InfoCard from "../Card/InfoCard";
import { useTranslations } from "next-intl";

const BenefitsSection = () => {
  const t = useTranslations("VipPage.Benefits");

  const BENEFITS = [
    {
      icon: <FaRocket size={40} />,
      title: t("boost.title"),
      description: t("boost.description"),
    },
    {
      icon: <FaUserTie size={40} />,
      title: t("dedicatedVipHost.title"),
      description: t("dedicatedVipHost.description"),
    },
    {
      icon: <FaUndoAlt size={40} />,
      title: t("recentPlayBonuses.title"),
      description: t("recentPlayBonuses.description"),
    },
    {
      icon: <FaLevelUpAlt size={40} />,
      title: t("levelUps.title"),
      description: t("levelUps.description"),
    },
    {
      icon: <FaGift size={40} />,
      title: t("bespokeBenefits.title"),
      description: t("bespokeBenefits.description"),
    },
  ];

  return (
    <section className="flex flex-col gap-6">
      <h3 className="text-center text-xl font-bold">{t("label")}</h3>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {BENEFITS.map((benefit, index) => (
          <div
            key={index}
            className={
              BENEFITS.length % 2 !== 0 && index === BENEFITS.length - 1
                ? "lg:col-span-2"
                : ""
            }
          >
            <InfoCard
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
