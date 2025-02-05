import {
  FaHandHoldingDollar,
  FaHourglassHalf,
  FaMoneyBillWave,
  FaRotateRight,
  FaSackDollar,
} from "react-icons/fa6";
import InfoCard from "@/components/Card/InfoCard";

const COMMISSION_RULES = [
  {
    icon: <FaRotateRight size={40} />,
    title: "Turnover Requirement for Withdrawal",
    description:
      "Commission can be transferred to the main wallet. A 4x turnover is required before withdrawal.",
  },
  {
    icon: <FaMoneyBillWave size={40} />,
    title: "Minimum Withdrawal Limit",
    description:
      "A minimum commission of 5 Baht is required to withdraw to the main wallet.",
  },
  {
    icon: <FaHandHoldingDollar size={40} />,
    title: "Maximum Daily Friend-Invite Commission",
    description: "Maximum commission for inviting friends is 3,000 Baht daily.",
  },
  {
    icon: <FaSackDollar size={40} />,
    title: "Eligible Deposits for Commission",
    description:
      "Only deposits made by friends without any promotions are counted.",
  },
  {
    icon: <FaHourglassHalf size={40} />,
    title: "Daily Calculation Time",
    description:
      "The system calculates your friends' losses daily from 00:00 to 23:59. Income is calculated every day at 8:00.",
  },
];

const RulesSection = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Commission Rules</h2>
      <p>Invite friends and earn 3% daily</p>

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
