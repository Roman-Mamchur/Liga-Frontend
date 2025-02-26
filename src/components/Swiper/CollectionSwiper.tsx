import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "./SwiperNavButtons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import {
  setActiveCasinoGame,
  setActiveSportsGame,
} from "@/store/slices/categorySlice";
import GameCard from "../Card/GameCard";
import { Category } from "@/data/collectionData";
import { usePathname } from "@/i18n/routing";
import "swiper/css";
import GameCardSkeleton from "../Skeleton/GameCardSkeleton";
import { useTranslations } from "next-intl";

interface CollectionSwiperProps {
  categoryData: Category;
  showOnline: boolean;
  showCategoryLink: boolean;
  showIndex?: boolean;
  showMore?: boolean;
  type: "casino" | "sports";
}

const CollectionSwiper: React.FC<CollectionSwiperProps> = ({
  categoryData,
  showOnline,
  showCategoryLink,
  showIndex = false,
  type,
  showMore = false,
}) => {
  const [swiperRefs, setSwiperRefs] = useState<
    Record<string, SwiperClass | null>
  >({});
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleSwiperInit = (swiper: SwiperClass, category: string) => {
    setSwiperRefs((prevRefs) => ({ ...prevRefs, [category]: swiper }));
    setIsSwiperReady(true);
  };

  const handleCategoryClick = (category: string) => {
    dispatch(setActiveCasinoGame(category));
    dispatch(setActiveSportsGame(category));
  };

  const maxDisplay = 20;
  const allGames = showCategoryLink
    ? categoryData.games.slice(0, maxDisplay)
    : categoryData.games;
  const showPlaceholder =
    showCategoryLink && categoryData.games.length > maxDisplay;
  const pathname = usePathname();
  const currentCategory = pathname?.startsWith("/sports") ? "sports" : "casino";

  const t = useTranslations("Categories");

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-xl font-bold text-foreground opacity-80">
          <categoryData.icon />
          {t(`${type}.${categoryData.category}`)}
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
        className="mb-8 mt-2"
      >
        <div className="my-4 flex flex-nowrap gap-1 overflow-x-hidden md:gap-4">
          {!isSwiperReady
            ? [...Array(20)].map((_, index) => (
                <SwiperSlide key={index} className="flex-1 pt-2">
                  <GameCardSkeleton showOnline={showOnline} />
                </SwiperSlide>
              ))
            : allGames.map((game, index) => (
                <SwiperSlide key={game.id} className="min-w-36 flex-1 pt-2">
                  <div className="group relative">
                    <GameCard
                      key={game.id}
                      id={game.id}
                      name={game.name}
                      image={game.image}
                      category={currentCategory}
                      onlinePlayers={
                        showOnline ? game.onlinePlayers : undefined
                      }
                      showOnline={true}
                    />
                    {showIndex && (
                      <div className="absolute left-0 top-10 flex w-8 items-center justify-center rounded-r bg-gradient-to-r from-primary to-secondary px-3 py-1 text-xs font-semibold tabular-nums text-white shadow-sm duration-300 group-hover:-translate-y-2">
                        {index + 1}
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
          {showPlaceholder && showMore && isSwiperReady && (
            <SwiperSlide className="min-w-36 flex-1 cursor-pointer pt-2">
              <div className="h-48 w-full rounded bg-primary duration-300 ease-in-out hover:-translate-y-2 hover:shadow-md">
                <div
                  className="flex h-full flex-col items-center justify-center gap-1 text-lg font-semibold text-white"
                  onClick={() => handleCategoryClick(categoryData.category)}
                >
                  <span>{t("seeAll")}</span>
                  <span>{t(`${type}.${categoryData.category}`)}</span>
                </div>
              </div>
            </SwiperSlide>
          )}
        </div>
      </Swiper>
    </>
  );
};

export default CollectionSwiper;
