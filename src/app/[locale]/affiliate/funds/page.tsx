import AffiliateBalanceTable from "@/components/Table/AffiliateBalanceTable";
import { useTranslations } from "next-intl";

const AffiliateFundsPage = () => {
  const t = useTranslations("AffiliatePage.Funds");

  return (
    <div>
      <AffiliateBalanceTable />

      <div className="mt-6 flex w-full flex-col items-center justify-center gap-4 text-sm">
        <button className="rounded bg-primary px-6 py-3 font-semibold text-white duration-200 hover:scale-105 hover:bg-secondary">
          {t("button")}
        </button>

        <p className="text-center opacity-60">{t("notice")}</p>
      </div>
    </div>
  );
};

export default AffiliateFundsPage;
