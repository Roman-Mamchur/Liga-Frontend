import Image from "next/image";
import React from "react";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { BsFullscreen } from "react-icons/bs";
import { FaSquare } from "react-icons/fa6";

const GamePlayerCard = () => {
  return (
    <div className="flex flex-col">
      <div className="flex min-h-[calc(100vh-240px)] w-full items-center justify-center rounded-t-lg bg-foreground text-white md:min-h-[calc(100vh-176px)]">
        <p className="text-sm font-semibold opacity-60">
          Game will be displayed in here
        </p>
      </div>
      <div className="flex justify-between gap-6 divide-x-2 divide-black/50 rounded-b-lg bg-card p-4 shadow-md">
        <div className="flex items-center gap-2">
          <div className="cursor-pointer rounded-full p-2 duration-200 hover:bg-black/10">
            <BsFullscreen />
          </div>
          <div className="cursor-pointer rounded-full p-2 duration-200 hover:bg-black/10">
            <FaSquare />
          </div>
          <div className="cursor-pointer rounded-full p-2 duration-200 hover:bg-black/10">
            <BiSolidBarChartAlt2 />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end md:justify-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            priority={true}
            className="h-auto w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default GamePlayerCard;
