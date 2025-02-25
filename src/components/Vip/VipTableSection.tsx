import { useTranslations } from "next-intl";
import VipTable from "./VipTable";
import { vipTables, tiers } from "@/data/vipData";

const VipTableSection = () => {
  const t = useTranslations("VipPage.Tables");
  const vipT = useTranslations("VipInfo");

  const translatedTiers = tiers.map((tier) => vipT(`Tiers.${tier}`));

  return (
    <section className="flex flex-col gap-12">
      {vipTables.map((table) => (
        <VipTable
          key={table.key}
          title={t(`${table.key}.label`)}
          tiers={translatedTiers}
          rawTiers={tiers}
          data={table.dataKeys.map((key) => ({
            name: t(`${table.key}.data.${key}.name`),
            values: t.raw(`${table.key}.data.${key}.values`) as string[],
          }))}
        />
      ))}
    </section>
  );
};

export default VipTableSection;
