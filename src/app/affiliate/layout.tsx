import { Metadata } from "next";
import HeroBanner from "@/components/Layout/HeroBanner";
import SidebarNav from "@/components/Affiliate/SidebarNav";

export const metadata: Metadata = {
  title: "Join FaFa878 Affiliate Program - Earn High Commissions",
  description:
    "Partner with FaFa878 and maximize your earnings through our high-paying affiliate program. Get top commissions, real-time tracking, and exclusive promotions. Join now!",
};

const AffiliateLayout = ({ children }: { children: React.ReactNode }) => {
  const navItems = [
    { name: "Overview", path: "/affiliate" },
    { name: "Campaigns", path: "/affiliate/campaigns" },
    { name: "Funds", path: "/affiliate/funds" },
    { name: "Referred Users", path: "/affiliate/referred-users" },
    { name: "FAQ", path: "/affiliate/faq" },
  ];

  return (
    <div>
      <HeroBanner title="Affiliate" />
      <div className="container my-8 flex flex-col justify-between gap-6 md:flex-row">
        <div className="md:sticky md:top-4 md:h-fit">
          <SidebarNav navItems={navItems} />
        </div>

        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default AffiliateLayout;
