"use client";

import { usePathname } from "next/navigation";
import { allCasinoGames, allSportsGames } from "@/data/collectionData";
import CollectionSwiper from "../Swiper/CollectionSwiper";

const GameDetailsPopularGamesList = () => {
  const pathname = usePathname();

  const isCasino = pathname.includes("/casino/");
  const categoryData = isCasino ? allCasinoGames[0] : allSportsGames[0];

  return (
    <div className="flex">
      <div className="w-0 flex-1">
        {isCasino ? (
          <CollectionSwiper
            categoryData={categoryData}
            showOnline={true}
            showCategoryLink={true}
          />
        ) : (
          <CollectionSwiper
            categoryData={categoryData}
            showOnline={false}
            showCategoryLink={false}
          />
        )}
      </div>
    </div>
  );
};

export default GameDetailsPopularGamesList;
