import SearchBar from "@/components/Search/SearchBar";
import SwiperBanner from "@/components/Swiper/SwiperBanner";
import { Metadata } from "next";
import SelectorMenu from "@/components/Selector/SelectorMenu";
import GameList from "@/components/Section/GameList";
import LeaderboardTable from "@/components/Table/LeaderboardTable";

export const metadata: Metadata = {
  title: "Online Casino Games - Slots, Classic Casino Games & Bonuses",
  description:
    "Discover an exciting selection of online casino games at FaFa878. Play slots, table games, and live dealer games while enjoying unbeatable bonuses and thrilling gameplay. Start your casino adventure today!",
};

export default function Home() {
  return (
    <>
      <section>
        <SwiperBanner />
      </section>
      <div className="container">
        <section className="md:mt-8">
          <div className="hidden md:block">
            <SearchBar triggerType="page" />
          </div>
          <div className="mt-4">
            <div className="hidden md:block">
              <SelectorMenu display="both" type="casino" />
            </div>
            <div className="block md:hidden">
              <SelectorMenu display="icon" type="casino" />
            </div>
          </div>
        </section>
        <section className="mt-8">
          <GameList />
        </section>
        <section className="mb-8 mt-2">
          <LeaderboardTable />
        </section>
      </div>
    </>
  );
}
