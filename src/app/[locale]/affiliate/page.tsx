import AdvantagesSection from "@/components/Affiliate/AdvantagesSection";
import AffiliateStats from "@/components/Affiliate/AffiliateStats";
import FaqSection from "@/components/Affiliate/FaqSection";
import ReferralLink from "@/components/Affiliate/ReferralLink";
import RulesSection from "@/components/Affiliate/RulesSection";
import { Link } from "@/i18n/routing";
import { FaArrowRight } from "react-icons/fa6";

const AffiliateOverviewPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <AffiliateStats />
      <div className="rounded bg-card shadow-md">
        <ReferralLink
          type={1}
          desc="Ready to earn commission? Tap the 'Copy Referral Link'
            button and share your default campaign."
        />
      </div>
      <RulesSection />
      <AdvantagesSection />
      <div className="rounded bg-card shadow-md">
        <ReferralLink
          type={1}
          desc="Ready to earn commission? Tap the 'Copy Referral Link'
            button and share your default campaign."
        />
      </div>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <FaqSection defaultCategory="General" />
        <div className="flex justify-end">
          <Link
            href="affiliate/faq"
            className="flex w-fit items-center justify-end gap-2 rounded bg-primary px-3 py-2 text-sm font-semibold text-white duration-200 hover:scale-105 hover:bg-secondary"
          >
            <span>Read More</span>
            <span>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AffiliateOverviewPage;
