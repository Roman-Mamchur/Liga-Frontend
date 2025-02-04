import AffiliateBalanceTable from "@/components/Table/AffiliateBalanceTable";

const AffiliateFundsPage = () => {
  return (
    <div>
      <AffiliateBalanceTable />

      <div className="mt-6 flex w-full flex-col items-center justify-center gap-4 text-sm">
        <button className="rounded bg-primary px-6 py-3 font-semibold text-white duration-200 hover:scale-105 hover:bg-secondary">
          Withdraw available commission
        </button>

        <p className="opacity-60">
          Transfers affiliate commission to your available balance.
        </p>
      </div>
    </div>
  );
};

export default AffiliateFundsPage;
