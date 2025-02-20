import { Metadata } from "next";
import SidebarNav from "@/components/Affiliate/SidebarNav";
import HeroBanner from "@/components/Layout/HeroBanner";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title:
    "Your Profile - Manage Account and View Progress | FaFa878 Affiliate Program",
  description:
    "Access your FaFa878 affiliate profile to manage account settings, track your earnings, and monitor your progress. View your affiliate tier, benefits, and performance at any time. Stay up-to-date with your success in the program!",
};

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations("ProfilePage.Layout");

  const navItems = [
    { name: `${t("overview")}`, path: "/profile" },
    { name: `${t("history")}`, path: "/profile/history" },
    { name: `${t("rebate")}`, path: "/profile/rebate" },
    { name: `${t("cashback")}`, path: "/profile/cashback" },
    { name: `${t("totalBets")}`, path: "/profile/bets" },
    { name: `${t("redeems")}`, path: "/profile/redeems" },
    { name: `${t("points")}`, path: "/profile/points" },
    { name: `${t("messages")}`, path: "/profile/messages" },
    { name: `${t("settings")}`, path: "/profile/settings" },
  ];

  return (
    <div>
      <HeroBanner title={t("hero")} />
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
