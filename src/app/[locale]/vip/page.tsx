import HeroBanner from "@/components/Layout/HeroBanner";
import BenefitsSection from "@/components/Vip/BenefitsSection";
import VipCardsSection from "@/components/Vip/VipCardsSection";
import VipTableSection from "@/components/Vip/VipTableSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Casino Rewards & Exclusive Perks - FaFa878",
  description:
    "Join the FaFa878 VIP Club for elite casino rewards! Enjoy personalized bonuses, higher cashback, priority support, and exclusive promotions. Elevate your gaming experience today!",
};

const VipPage = () => {
  return (
    <>
      <HeroBanner title="VIP Club" />
      <div className="container my-8">
        <div className="flex flex-col gap-10">
          {/* VIP Ranking Cards Section */}
          <VipCardsSection />

          {/* VIP Detailed Tables Section */}
          <VipTableSection />

          {/* VIP Club Benefits Section */}
          <BenefitsSection />
        </div>
      </div>
    </>
  );
};

export default VipPage;
