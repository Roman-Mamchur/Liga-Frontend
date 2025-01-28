"use client";

import { allSports } from "@/data/collectionData";
import CollectionSwiper from "../Swiper/CollectionSwiper";

const SportList = () => {
  return (
    <div className="flex">
      <div className="w-0 flex-1">
        <section>
          {allSports.map((categoryData, categoryIndex) => (
            <CollectionSwiper
              key={categoryIndex}
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
