import CashbackTable from "@/components/Table/CashbackTable";
import { FaHandHoldingDollar } from "react-icons/fa6";

const ProfileCashbackPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 text-xl font-bold opacity-80">
        <FaHandHoldingDollar />
        <h1>Cashback</h1>
      </div>
      <CashbackTable />
    </div>
  );
};

export default ProfileCashbackPage;
