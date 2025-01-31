import AdvantagesSection from "@/components/Affiliate/AdvantagesSection";
import AffiliateStats from "@/components/Affiliate/AffiliateStats";
import FaqSection from "@/components/Affiliate/FaqSection";
import ReferralLink from "@/components/Affiliate/ReferralLink";
import RulesSection from "@/components/Affiliate/RulesSection";

const AffiliateOverview = () => {
  return (
    <div className="flex flex-col gap-6">
      <AffiliateStats />
      <ReferralLink />
      <RulesSection />
      <AdvantagesSection />
      <ReferralLink />
      <FaqSection />
    </div>
  );
};

export default AffiliateOverview;
