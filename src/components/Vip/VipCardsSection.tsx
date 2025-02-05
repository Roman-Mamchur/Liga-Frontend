import { vipCardInfo } from "@/data/vipData";
import VipCard from "./VipCard";

const VipCardsSection = () => {
  return (
    <section className="flex">
      <div className="w-0 flex-1">
        <h1 className="mb-8 text-2xl font-bold">VIP Ranking System</h1>
        <div className="dark-scrollbar flex flex-nowrap gap-1 overflow-x-auto scroll-smooth pb-3">
          {/* Card */}
          {vipCardInfo.map((medal, index) => (
            <VipCard
              key={index}
              title={medal.title}
              amount={medal.amount}
              benefits={medal.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VipCardsSection;
