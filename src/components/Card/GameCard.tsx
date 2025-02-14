"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

interface GameCardProps {
  id: string;
  name: string;
  image: string;
  category: "casino" | "sports";
  onlinePlayers?: number;
  showOnline?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({
  id,
  name,
  image,
  category,
  onlinePlayers,
  showOnline = false,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${category}/game/${id}`);
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full cursor-pointer" onClick={handleClick}>
      <Image
        src={image}
        alt={name}
        width={150}
        height={200}
        priority={true}
        className="rounded object-contain duration-300 ease-in-out hover:-translate-y-2 hover:shadow-md"
      />
      {showOnline && onlinePlayers !== undefined && (
        <p className="mb-3 mt-1 flex items-center">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600"></span>
          </span>
          <span className="ml-1 text-xs text-foreground opacity-60 md:ml-2 md:text-sm">
            {onlinePlayers.toLocaleString()} playing
          </span>
        </p>
      )}
    </div>
  );
};

export default GameCard;
