import SearchBar from "@/components/Search/SearchBar";
import SelectorMenu from "@/components/Selector/SelectorMenu";
import SwiperBanner from "@/components/Swiper/SwiperBanner";
import SportList from "@/components/Section/SportList";
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
    namespace: "Metadata.SportsPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const SportsPage = () => {
  return (
    <div>
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
                    <SelectorMenu display="both" type="sports" />
                  </div>
                  <div className="block md:hidden">
                    <SelectorMenu display="icon" type="sports" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-8">
            <SportList />
          </section>
          <section className="mb-8 mt-2">
            <LeaderboardTable />
          </section>
        </div>
      </>
    </div>
  );
};

export default SportsPage;
