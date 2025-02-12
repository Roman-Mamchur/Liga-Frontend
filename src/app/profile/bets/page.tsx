import TotalBetsTable from "@/components/Table/TotalBetsTable";
import { FaCoins } from "react-icons/fa6";

const ProfileBetsPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 text-xl font-bold opacity-80">
        <FaCoins />
        <h1>Total Bets</h1>
      </div>
      <TotalBetsTable />
    </div>
  );
};

export default ProfileBetsPage;
