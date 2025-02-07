import ProfileStatsSection from "@/components/Profile/ProfileStatsSection";
import ProfileWalletSection from "@/components/Profile/ProfileWalletSection";
const ProfileOverviewPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <ProfileStatsSection />
      <ProfileWalletSection />
      {/* Total bets and Promotions Section */}
      {/* <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <section>Total Bets</section>
        </div>
        <div className="flex-1">
          <section>Promotions</section>
        </div>
      </div> */}
    </div>
  );
};

export default ProfileOverviewPage;
