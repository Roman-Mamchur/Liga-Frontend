import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "./SwiperNavButtons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { setActiveCasinoGame } from "@/store/slices/categorySlice";

interface CollectionSwiperProps {
  categoryData: {
    icon: React.ComponentType;
    category: string;
    games: string[];
  };
  showOnline: boolean;
}

const CollectionSwiper: React.FC<CollectionSwiperProps> = ({
  categoryData,
  showOnline,
}) => {
  const [swiperRefs, setSwiperRefs] = useState<
    Record<string, SwiperClass | null>
  >({});

  const dispatch = useDispatch<AppDispatch>();

  const handleSwiperInit = (swiper: SwiperClass, category: string) => {
    setSwiperRefs((prevRefs) => ({ ...prevRefs, [category]: swiper }));
  };

  const handleCategoryClick = (category: string) => {
    dispatch(setActiveCasinoGame(category));
  };

  const maxDisplay = 20;
  const allGames = categoryData.games.slice(0, maxDisplay);
  const showPlaceholder = categoryData.games.length > maxDisplay;

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-xl font-bold text-foreground opacity-80">
          <categoryData.icon />
          {categoryData.category}
        </h3>
        <div>
          <SwiperNavButtons swiperRef={swiperRefs[categoryData.category]} />
        </div>
      </div>
      <Swiper
        onSwiper={(swiper) => handleSwiperInit(swiper, categoryData.category)}
        slidesPerView="auto"
        spaceBetween={8}
        slidesPerGroupAuto={true}
        className="my-2"
      >
        <div className="my-4 flex flex-nowrap gap-1 overflow-x-hidden md:gap-4">
          {allGames.map((game, gameIndex) => (
            <SwiperSlide key={gameIndex} className="min-w-36 flex-1 pt-2">
              <Image
                src={`https://placehold.co/600x800.png?text=${encodeURIComponent(
                  game,
                )}&font=montserrat`}
                alt={game}
                width={150}
                height={200}
                priority={gameIndex === 0}
                className="rounded object-contain duration-300 ease-in-out hover:-translate-y-2 hover:shadow-md"
              />
              {showOnline && (
                <p className="mb-3 mt-1 flex items-center">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600"></span>
                  </span>
                  <span className="ml-1 text-xs text-foreground opacity-60 md:ml-2 md:text-sm">
                    1,413 playing
                  </span>
                </p>
              )}
            </SwiperSlide>
          ))}
          {showPlaceholder && (
            <SwiperSlide className="min-w-36 flex-1 cursor-pointer pt-2">
              <Image
                src={`https://placehold.co/600x800.png?text=${encodeURIComponent(
                  "See all\n" + categoryData.category,
                )}&font=montserrat`}
                alt={categoryData.category}
                width={150}
                height={200}
                priority={true}
                className="rounded object-contain duration-300 ease-in-out hover:-translate-y-2 hover:shadow-md"
                onClick={() => handleCategoryClick(categoryData.category)}
              />
            </SwiperSlide>
          )}
        </div>
      </Swiper>
    </>
  );
};

export default CollectionSwiper;
