import SearchBar from "@/components/Search/SearchBar";
import SwiperBanner from "@/components/Swiper/SwiperBanner";
import SelectorMenu from "@/components/Selector/SelectorMenu";
import GameList from "@/components/Section/GameList";
import LeaderboardTable from "@/components/Table/LeaderboardTable";
import { getTranslations } from "next-intl/server";

interface Params {
  locale: string;
}

export async function generateMetadata({ locale }: Params) {
  const t = await getTranslations({ locale, namespace: "Metadata.CasinoPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

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
