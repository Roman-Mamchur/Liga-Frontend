import { Metadata } from "next";
import HeroBanner from "@/components/Layout/HeroBanner";
import SidebarNav from "@/components/Affiliate/SidebarNav";

export const metadata: Metadata = {
  title: "Join FaFa878 Affiliate Program - Earn High Commissions",
  description:
    "Partner with FaFa878 and maximize your earnings through our high-paying affiliate program. Get top commissions, real-time tracking, and exclusive promotions. Join now!",
};

const AffiliateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HeroBanner title="Affiliate Program" />
      <div className="container my-8 flex flex-col justify-between gap-6 md:flex-row">
        <SidebarNav />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default AffiliateLayout;
