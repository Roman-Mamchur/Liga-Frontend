import { useTranslations } from "next-intl";
import Image from "next/image";

const AffiliateStats = () => {
  const t = useTranslations("AffiliatePage.Overview.AffiliateStats");

  return (
    <div className="flex rounded shadow-md">
      <div className="flex flex-1 flex-col gap-3 rounded bg-card p-4 md:rounded-r-none">
        <h3 className="text-2xl font-bold opacity-80">{t("title")}</h3>
        <p className="text-sm opacity-80">{t("description")}</p>
        <div className="w-fit rounded bg-primary px-4 py-2 text-white shadow-md">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col">
              <p className="text-lg font-bold">{t("customersNumber")}</p>
              <p className="text-sm">{t("customersLabel")}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-bold">{t("paymentMethodsNumber")}</p>
              <p className="text-sm">{t("paymentMethodsLabel")}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-bold">{t("languagesNumber")}</p>
              <p className="text-sm">{t("languagesLabel")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Image
          src="/affiliate/referral.webp"
          alt="Affiliate Overview"
          height={0}
          width={0}
          sizes="100vw"
          priority={true}
          className="h-full w-40 rounded-r object-cover shadow-md"
        />
      </div>
    </div>
  );
};

export default AffiliateStats;
