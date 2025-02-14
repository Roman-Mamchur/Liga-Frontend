"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { allCasinoGames } from "@/data/collectionData";
import GameCard from "../Card/GameCard";
import CollectionSwiper from "../Swiper/CollectionSwiper";

const GameList: React.FC = () => {
  const activeCasinoGame = useSelector(
    (state: RootState) => state.category.activeCasinoGame,
  );

  return (
    <div className="flex">
      <div className="w-0 flex-1">
        {activeCasinoGame === "Lobby"
          ? allCasinoGames.map((categoryData) => (
              <CollectionSwiper
                key={categoryData.category}
                categoryData={categoryData}
                showOnline={true}
                showCategoryLink={true}
              />
            ))
          : allCasinoGames
              .filter(
                (categoryData) => categoryData.category === activeCasinoGame,
              )
              .map((categoryData) => (
                <div key={categoryData.category}>
                  <h3 className="flex items-center gap-2 text-xl font-bold text-foreground opacity-80">
                    <categoryData.icon />
                    {categoryData.category}
                  </h3>
                  <div className="my-4 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
                    {categoryData.games.map((game) => (
                      <GameCard
                        key={game.id}
                        id={game.id}
                        name={game.name}
                        image={game.image}
                        category="casino"
                        onlinePlayers={game.onlinePlayers}
                        showOnline={true}
                      />
                    ))}
                  </div>
                </div>
              ))}
      </div>
    </div>
  );
};

export default GameList;
