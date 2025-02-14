"use client";

import { allSportsGames } from "@/data/collectionData";
import CollectionSwiper from "../Swiper/CollectionSwiper";

const SportList = () => {
  return (
    <div className="flex">
      <div className="w-0 flex-1">
        <section>
          {allSportsGames.map((categoryData) => (
            <CollectionSwiper
              key={categoryData.category}
              categoryData={categoryData}
              showOnline={false}
              showCategoryLink={false}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default SportList;
