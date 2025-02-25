import HeroBanner from "@/components/Layout/HeroBanner";
import SidebarNav from "@/components/Affiliate/SidebarNav";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;

  const t = await getTranslations({
    locale: resolvedParams.locale,
    namespace: "Metadata.AffiliatePage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const AffiliateLayout = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations("AffiliatePage.Layout");

  const navItems = [
    { name: t("overview"), path: "/affiliate" },
    { name: t("campaigns"), path: "/affiliate/campaigns" },
    { name: t("funds"), path: "/affiliate/funds" },
    { name: t("referredUsers"), path: "/affiliate/referred-users" },
    { name: t("faq"), path: "/affiliate/faq" },
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

export default AffiliateLayout;
