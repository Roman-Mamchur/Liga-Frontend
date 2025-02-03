import AdvantagesSection from "@/components/Affiliate/AdvantagesSection";
import AffiliateStats from "@/components/Affiliate/AffiliateStats";
import FaqSection from "@/components/Affiliate/FaqSection";
import ReferralLink from "@/components/Affiliate/ReferralLink";
import RulesSection from "@/components/Affiliate/RulesSection";

const AffiliateOverviewPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <AffiliateStats />
      <ReferralLink />
      <RulesSection />
      <AdvantagesSection />
      <ReferralLink />
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <FaqSection defaultCategory="General" />
      </section>
    </div>
  );
};

export default AffiliateOverviewPage;
