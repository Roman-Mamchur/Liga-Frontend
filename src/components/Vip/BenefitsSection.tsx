import React from "react";
import { FaLevelUpAlt, FaUndoAlt } from "react-icons/fa";
import { FaGift, FaRocket, FaUserTie } from "react-icons/fa6";
import InfoCard from "../Card/InfoCard";

const BenefitsSection = () => {
  const BENEFITS = [
    {
      icon: <FaRocket size={40} />,
      title: "Boost",
      description:
        "Every week and every month, expect a fresh bonus based on your recent games. The more you play, the higher the bonuses.",
    },
    {
      icon: <FaUserTie size={40} />,
      title: "Dedicated VIP Host",
      description:
        "Receive your own dedicated VIP host who will support and cater to your betting needs.",
    },
    {
      icon: <FaUndoAlt size={40} />,
      title: "Recent Play bonuses",
      description:
        "Having a rough streak of luck? We offer money back on losses every time you level up.",
    },
    {
      icon: <FaLevelUpAlt size={40} />,
      title: "Level-Ups",
      description:
        "Reach a new level and get paid. The level-ups get better the higher you go.",
    },
    {
      icon: <FaGift size={40} />,
      title: "Bespoke benefits",
      description:
        "Work with your dedicated VIP host to tailor benefits to your gaming needs.",
    },
  ];

  return (
    <section className="flex flex-col gap-6">
      <h3 className="text-center text-xl font-bold">
        FaFa878 VIP Club benefits
      </h3>
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
