"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "@/components/Category/SwiperNavButtons";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { allGames } from "@/data/gamesData";
import Image from "next/image";
import { useState } from "react";

const GameList: React.FC = () => {
  const activeCategory = useSelector(
    (state: RootState) => state.category.activeCategory,
  );

  const [swiperRefs, setSwiperRefs] = useState<
    Record<string, SwiperClass | null>
  >({});

  const handleSwiperInit = (swiper: SwiperClass, category: string) => {
    setSwiperRefs((prevRefs) => ({ ...prevRefs, [category]: swiper }));
  };

  return (
    <div className="flex">
      <div className="w-0 flex-1">
        {activeCategory === "Lobby"
          ? allGames.map((categoryData, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-2 text-xl font-bold text-foreground opacity-80">
                    <categoryData.icon />
                    {categoryData.category}
                  </h3>

                  <div>
                    <SwiperNavButtons
                      swiperRef={swiperRefs[categoryData.category]}
                    />
                  </div>
                </div>
                <Swiper
                  onSwiper={(swiper) =>
                    handleSwiperInit(swiper, categoryData.category)
                  }
                  slidesPerView="auto"
                  spaceBetween={10}
                  slidesPerGroupAuto={true}
                  className="my-4"
                >
                  <div className="my-4 flex flex-nowrap gap-1 overflow-x-hidden md:gap-4">
                    {categoryData.games.map((game, gameIndex) => (
                      <SwiperSlide key={gameIndex} className="min-w-36 flex-1">
                        <Image
                          src={`https://placehold.co/600x800.png?text=${encodeURIComponent(game)}&font=montserrat`}
                          alt={game}
                          width={150}
                          height={200}
                          className="rounded object-contain duration-300 ease-in-out hover:-translate-y-2"
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
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
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
                  <div className="my-4 flex flex-wrap gap-1 md:gap-2">
                    {categoryData.games.map((game, gameIndex) => (
                      <div key={gameIndex} className="min-w-36">
                        <Image
                          src={`https://placehold.co/600x800.png?text=${encodeURIComponent(game)}&font=montserrat`}
                          alt={game}
                          width={150}
                          height={200}
                          className="rounded object-contain duration-300 ease-in-out hover:-translate-y-2"
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
