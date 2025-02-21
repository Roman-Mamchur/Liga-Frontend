import GamePlayerCard from "@/components/Card/GamePlayerCard";
import GameDetailsDropdown from "@/components/Dropdown/GameDetailsDropdown";
import OfferedGamesList from "@/components/Section/OfferedGamesList";
import LeaderboardTable from "@/components/Table/LeaderboardTable";
import { getTranslations } from "next-intl/server";

interface Params {
  locale: string;
}

export async function generateMetadata({ locale }: Params) {
  const t = await getTranslations({
    locale,
    namespace: "Metadata.GamePage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const GameDetailPage = () => {
  return (
    <div className="container my-8">
      <div className="flex flex-col gap-8">
        <GamePlayerCard />
        <GameDetailsDropdown />
        <OfferedGamesList />
        <LeaderboardTable />
      </div>
    </div>
  );
};

export default GameDetailPage;
