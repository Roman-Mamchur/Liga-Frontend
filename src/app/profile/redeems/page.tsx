import RedeemsTable from "@/components/Table/RedeemsTable";
import { FaTicket } from "react-icons/fa6";

const ProfileRedeemsPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 text-xl font-bold opacity-80">
        <FaTicket />
        <h1>Redeems</h1>
      </div>
      <RedeemsTable />
    </div>
  );
};

export default ProfileRedeemsPage;
