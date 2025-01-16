import Banner from "@/components/Banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Casino Games - Slots, Classic Casino Games & Bonuses",
  description:
    "Discover an exciting selection of online casino games at FaFa878. Play slots, table games, and live dealer games while enjoying unbeatable bonuses and thrilling gameplay. Start your casino adventure today!",
};

const CasinoPage = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
    </div>
  );
};

export default CasinoPage;
