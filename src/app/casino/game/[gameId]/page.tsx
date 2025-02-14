"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { BsFullscreen } from "react-icons/bs";
import { FaSquare } from "react-icons/fa6";

const GameDetailPage = () => {
  const params = useParams();
  const { gameId } = params;

  return (
    <div className="container my-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <div className="flex min-h-[calc(100vh-240px)] w-full items-center justify-center rounded-t-lg bg-foreground text-white md:min-h-[calc(100vh-176px)]">
            <p className="text-sm font-semibold opacity-60">
              Game will be displayed in here
            </p>
          </div>

          <div className="flex justify-between gap-6 divide-x-2 divide-black/50 rounded-b-lg bg-card p-4">
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
            <div className="flex flex-1 items-center justify-center">
              <Image
                src="/logo.png"
                alt="logo"
                width={100}
                height={30}
                sizes="100vw"
                priority={true}
              />
            </div>
          </div>
        </div>

        <div>
          <h1>Game Detail Page</h1>
          <p>Game ID: {gameId}</p>
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;
