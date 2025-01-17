import SearchBar from "@/components/SearchBar";
import SwiperBanner from "@/components/SwiperBanner";
import { Metadata } from "next";
import SelectorMenu from "@/components/Selector/SelectorMenu";

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

      <section className="my-8">
        <div className="container">
          <SearchBar />
          <SelectorMenu display="both" />
        </div>
      </section>
    </>
  );
}
