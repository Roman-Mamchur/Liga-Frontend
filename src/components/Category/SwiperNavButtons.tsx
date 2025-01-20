import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Swiper } from "swiper";

export const SwiperNavButtons: React.FC<{ swiperRef: Swiper | null }> = ({
  swiperRef,
}) => {
  const handlePrev = () => swiperRef?.slidePrev();
  const handleNext = () => swiperRef?.slideNext();

  return (
    <div className="flex gap-[1px]">
      <button
        className="rounded-l-full bg-primary px-3 py-2 text-white duration-200"
        onClick={handlePrev}
      >
        <FaChevronLeft size={14} />
      </button>
      <button
        className="hover:scale-101 rounded-r-full bg-primary px-3 py-2 text-white duration-200"
        onClick={handleNext}
      >
        <FaChevronRight size={14} />
      </button>
    </div>
  );
};
