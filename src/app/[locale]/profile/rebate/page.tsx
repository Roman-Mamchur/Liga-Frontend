import RebateTable from "@/components/Table/RebateTable";
import { RiDiscountPercentFill } from "react-icons/ri";

const ProfileRebatePage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 text-xl font-bold opacity-80">
        <RiDiscountPercentFill />
        <h1>Rebate</h1>
      </div>
      <RebateTable />
    </div>
  );
};

export default ProfileRebatePage;
