import {
  FaBolt,
  FaChartLine,
  FaCoins,
  FaGlobe,
  FaInfinity,
  FaSliders,
} from "react-icons/fa6";
import InfoCard from "@/components/Card/InfoCard";

const ADVANTAGES = [
  {
    icon: <FaBolt size={40} />,
    title: "Instant payout",
    description: "Skip the wait. See earnings instantly in your account.",
  },
  {
    icon: <FaInfinity size={40} />,
    title: "Lifetime commission",
    description: "If the people you refer keep playing, you keep getting paid.",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Market leading player value",
    description:
      "Grow your earnings with some of the highest returns offered to players.",
  },
  {
    icon: <FaSliders size={40} />,
    title: "Customize your commission",
    description:
      "Tailor your commission plan to fit your unique business needs.",
  },
  {
    icon: <FaCoins size={40} />,
    title: "Crypto & local currencies",
    description:
      "Earn your way with support for both cryptocurrency and local currencies.",
  },
  {
    icon: <FaGlobe size={40} />,
    title: "24x7 Multi language support",
    description:
      "Get the help you want in your preferred language all day, everyday.",
  },
];

const AdvantagesSection = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Exclusive advantages</h2>

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
