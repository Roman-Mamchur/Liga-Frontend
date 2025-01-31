import AffiliateStats from "@/components/Affiliate/AffiliateStats";
import ReferralLink from "@/components/Affiliate/ReferralLink";

const AffiliateOverview = () => {
  return (
    <div className="flex flex-col gap-6">
      <AffiliateStats />
      <ReferralLink />
    </div>
  );
};

export default AffiliateOverview;
