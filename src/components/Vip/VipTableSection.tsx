import {
  vipBenefitsInfo,
  vipRebatesInfo,
  vipLevelUpRequirementsInfo,
  vipRetentionRequirementsInfo,
  tiers,
} from "@/data/vipData";
import VipTable from "./VipTable";

const VipTableSection = () => {
  return (
    <section className="flex flex-col gap-12">
      <VipTable
        title="VIP Benefits"
        tiers={tiers}
        data={vipBenefitsInfo.data}
      />
      <VipTable
        title="Daily Cash Rebate"
        tiers={tiers}
        data={vipRebatesInfo.data}
      />
      <VipTable
        title="Level Up Requirements"
        tiers={tiers}
        data={vipLevelUpRequirementsInfo.data}
      />
      <VipTable
        title="Monthly Tier Retention Requirements"
        tiers={tiers}
        data={vipRetentionRequirementsInfo.data}
      />
    </section>
  );
};

export default VipTableSection;
