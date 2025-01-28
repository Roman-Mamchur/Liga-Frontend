"use client";

import { useDispatch } from "react-redux";
import { openModal } from "@/store/slices/promotionModalSlice";
import Image from "next/image";

interface PromotionCardProps {
  title: string;
  date: string;
  image: string;
  description: string;
}

const PromotionCard: React.FC<PromotionCardProps> = ({
  title,
  date,
  image,
  description,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModal({ title, date, image, description }));
  };

  return (
    <div
      onClick={handleClick}
      className="mx-auto h-60 w-80 cursor-pointer rounded-lg bg-card shadow-md duration-200 hover:-translate-y-1"
    >
      <div className="flex flex-col gap-2 p-2">
        <div className="h-40">
          <Image
            src={image}
            alt="Promotion image"
            width={0}
            height={0}
            sizes="100vw"
            priority={true}
            className="h-full w-full rounded object-cover"
          />
        </div>
        <div className="text-xs opacity-80">{date}</div>
        <div className="text-lg font-semibold">{title}</div>
      </div>
    </div>
  );
};

export default PromotionCard;
