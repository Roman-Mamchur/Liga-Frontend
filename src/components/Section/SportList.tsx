"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { allSportsGames } from "@/data/collectionData";
import GameCard from "../Card/GameCard";
import CollectionSwiper from "../Swiper/CollectionSwiper";
import { useEffect } from "react";
import { resetSportsGame } from "@/store/slices/categorySlice";
import { useTranslations } from "next-intl";

const SportList: React.FC = () => {
  const activeSportsGame = useSelector(
    (state: RootState) => state.category.activeSportsGame,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetSportsGame());
  }, [dispatch]);

  const t = useTranslations("Categories");

  return (
    <div className="flex">
      <div className="w-0 flex-1">
        {activeSportsGame === "Lobby"
          ? allSportsGames.map((categoryData, index) => (
              <CollectionSwiper
                key={categoryData.category}
                categoryData={categoryData}
                showOnline={false}
                showCategoryLink={true}
                showIndex={index === 0}
                type="sports"
                showMore
              />
            ))
          : allSportsGames
              .filter(
                (categoryData) => categoryData.category === activeSportsGame,
              )
              .map((categoryData) => (
                <div key={categoryData.category}>
                  <h3 className="flex items-center gap-2 text-xl font-bold text-foreground opacity-80">
                    <categoryData.icon />
                    {t(`sports.${categoryData.category}`)}
                  </h3>
                  <div className="my-4 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
                    {categoryData.games.map((game) => (
                      <GameCard
                        key={game.id}
                        id={game.id}
                        name={game.name}
                        image={game.image}
                        category="sports"
                        onlinePlayers={game.onlinePlayers}
                        showOnline={false}
                      />
                    ))}
                  </div>
                </div>
              ))}
      </div>
    </div>
  );
};

export default SportList;
