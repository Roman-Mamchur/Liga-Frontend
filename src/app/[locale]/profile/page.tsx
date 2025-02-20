import ProfilePromotions from "@/components/Profile/ProfilePromotions";
import ProfileStatsSection from "@/components/Profile/ProfileStatsSection";
import ProfileTotalBets from "@/components/Profile/ProfileTotalBets";
import ProfileWalletSection from "@/components/Profile/ProfileWalletSection";

const ProfileOverviewPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <ProfileStatsSection />
      <ProfileWalletSection />
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex-1 md:w-0">
          <section>
            <ProfileTotalBets />
          </section>
        </div>
        <div className="flex-1 md:w-0">
          <section>
            <ProfilePromotions />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverviewPage;
