import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Swiper } from "swiper";
import { useState, useEffect } from "react";

export const SwiperNavButtons: React.FC<{ swiperRef: Swiper | null }> = ({
  swiperRef,
}) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (!swiperRef) return;

    setIsBeginning(swiperRef.isBeginning);
    setIsEnd(swiperRef.isEnd);

    const handleSlideChange = () => {
      setIsBeginning(swiperRef.isBeginning);
      setIsEnd(swiperRef.isEnd);
    };

    swiperRef.on("slideChange", handleSlideChange);

    return () => {
      swiperRef.off("slideChange", handleSlideChange);
    };
  }, [swiperRef]);

  const handlePrev = () => swiperRef?.slidePrev();
  const handleNext = () => swiperRef?.slideNext();

  return (
    <div className="flex gap-[1px]">
      <button
        className={`rounded-l-full bg-primary px-3 py-2 text-white duration-200 ${
          isBeginning ? "cursor-default opacity-60" : "hover:opacity-80"
        }`}
        onClick={handlePrev}
        disabled={isBeginning}
      >
        <FaChevronLeft size={14} />
      </button>
      <button
        className={`rounded-r-full bg-primary px-3 py-2 text-white duration-200 ${
          isEnd ? "cursor-default opacity-60" : "hover:opacity-80"
        }`}
        onClick={handleNext}
        disabled={isEnd}
      >
        <FaChevronRight size={14} />
      </button>
    </div>
  );
};
