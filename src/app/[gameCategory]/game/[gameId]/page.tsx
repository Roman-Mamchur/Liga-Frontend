import GamePlayerCard from "@/components/Card/GamePlayerCard";
import GameDetailsDropdown from "@/components/Dropdown/GameDetailsDropdown";
import OfferedGamesList from "@/components/Section/OfferedGamesList";
import LeaderboardTable from "@/components/Table/LeaderboardTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Play Top Casino & Sports Games - Game Details & Live Players | FaFa878",
  description:
    "Explore in-depth details of your favorite casino and sports games at FaFa878. View game descriptions, player stats, and live activity. Join the action and start playing now!",
};

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
