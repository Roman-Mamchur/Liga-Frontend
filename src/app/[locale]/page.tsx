import SearchBar from "@/components/Search/SearchBar";
import SwiperBanner from "@/components/Swiper/SwiperBanner";
import SelectorMenu from "@/components/Selector/SelectorMenu";
import GameList from "@/components/Section/GameList";
import LeaderboardTable from "@/components/Table/LeaderboardTable";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;

  const t = await getTranslations({
    locale: resolvedParams.locale,
    namespace: "Metadata.CasinoPage",
  });

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
            <div className="flex">
              <div className="w-0 flex-1">
                <div className="hidden md:block">
                  <SelectorMenu display="both" type="casino" />
                </div>
                <div className="block md:hidden">
                  <SelectorMenu display="icon" type="casino" />
                </div>
              </div>
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
