import { Metadata } from "next";
import SearchBar from "@/components/Search/SearchBar";
import SelectorMenu from "@/components/Selector/SelectorMenu";
import SwiperBanner from "@/components/Swiper/SwiperBanner";
import SportList from "@/components/Section/SportList";

export const metadata: Metadata = {
  title: "Sports Betting - Online Sportsbook - Bet Online At FaFa878",
  description:
    "Experience the thrill of sports betting at FaFa878. Bet on your favorite sports, enjoy live betting options, and take advantage of exciting odds and promotions. Start placing your bets today!",
};

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
              <SelectorMenu display="both" type="sports" />
            </div>
          </section>
          <section className="mt-8">
            <SportList />
          </section>
        </div>
      </>
    </div>
  );
};

export default SportsPage;
