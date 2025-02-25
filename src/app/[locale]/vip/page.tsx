import HeroBanner from "@/components/Layout/HeroBanner";
import BenefitsSection from "@/components/Vip/BenefitsSection";
import VipCardsSection from "@/components/Vip/VipCardsSection";
import VipTableSection from "@/components/Vip/VipTableSection";
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
    namespace: "Metadata.VipPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const VipPage = () => {
  const t = useTranslations("VipPage");

  return (
    <>
      <HeroBanner title={t("hero")} />
      <div className="container my-8">
        <div className="flex flex-col gap-10">
          {/* VIP Ranking Cards Section */}
          <VipCardsSection />

          {/* VIP Detailed Tables Section */}
          <VipTableSection />

          {/* VIP Club Benefits Section */}
          <BenefitsSection />
        </div>
      </div>
    </>
  );
};

export default VipPage;
