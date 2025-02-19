import { Metadata } from "next";
import SidebarNav from "@/components/Affiliate/SidebarNav";
import HeroBanner from "@/components/Layout/HeroBanner";

export const metadata: Metadata = {
  title:
    "Your Profile - Manage Account and View Progress | FaFa878 Affiliate Program",
  description:
    "Access your FaFa878 affiliate profile to manage account settings, track your earnings, and monitor your progress. View your affiliate tier, benefits, and performance at any time. Stay up-to-date with your success in the program!",
};

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const navItems = [
    { name: "Overview", path: "/profile" },
    { name: "History", path: "/profile/history" },
    { name: "Rebate", path: "/profile/rebate" },
    { name: "Cashback", path: "/profile/cashback" },
    { name: "Total Bets", path: "/profile/bets" },
    { name: "Redeems", path: "/profile/redeems" },
    { name: "Points", path: "/profile/points" },
    { name: "Messages", path: "/profile/messages" },
    { name: "Settings", path: "/profile/settings" },
  ];

  return (
    <div>
      <HeroBanner title="Profile" />
      <div className="container my-8 flex flex-col justify-between gap-6 md:flex-row">
        <div className="md:sticky md:top-4 md:h-fit">
          <SidebarNav navItems={navItems} />
        </div>

        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;
