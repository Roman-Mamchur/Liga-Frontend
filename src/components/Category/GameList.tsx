"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { allGames } from "@/data/collectionData";
import Image from "next/image";
import CollectionSwiper from "./CollectionSwiper";

const GameList: React.FC = () => {
  const activeCategory = useSelector(
    (state: RootState) => state.category.activeCategory,
  );

  return (
    <div className="flex">
      <div className="w-0 flex-1">
        {activeCategory === "Lobby"
          ? allGames.map((categoryData, categoryIndex) => (
              <CollectionSwiper
                key={categoryIndex}
                categoryData={categoryData}
                showOnline={true}
              />
            ))
          : allGames
              .filter(
                (categoryData) => categoryData.category === activeCategory,
              )
              .map((categoryData) => (
                <div key={categoryData.category}>
                  <h3 className="flex items-center gap-2 text-xl font-bold text-foreground opacity-80">
                    <categoryData.icon />
                    {categoryData.category}
                  </h3>
                  <div className="my-4 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
                    {categoryData.games.map((game, gameIndex) => (
                      <div key={gameIndex} className="w-full">
                        <Image
                          src={`https://placehold.co/600x800.png?text=${encodeURIComponent(game)}&font=montserrat`}
                          alt={game}
                          width={150}
                          height={200}
                          priority={gameIndex === 0}
                          className="rounded object-contain duration-300 ease-in-out hover:-translate-y-2 hover:shadow-md"
                        />
                        <p className="mb-3 mt-1 flex items-center">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600"></span>
                          </span>
                          <span className="ml-1 text-xs text-foreground opacity-60 md:ml-2 md:text-sm">
                            1,413 playing
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
      </div>
    </div>
  );
};

export default GameList;
