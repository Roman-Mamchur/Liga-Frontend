import { FaFire, FaCrown } from "react-icons/fa6";
import { PiNumberCircleSevenFill } from "react-icons/pi";
import { IoMdBowtie } from "react-icons/io";
import { RiPokerClubsFill } from "react-icons/ri";
import { MdNewReleases } from "react-icons/md";

interface Game {
  id: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
  onlinePlayers: number;
}

export interface Category {
  category: string;
  icon: React.ComponentType;
  games: Game[];
}

const generateGames = (
  category: string,
  count: number,
  tags: string[],
): Game[] =>
  Array.from({ length: count }, (_, i) => {
    const gameName = `${category} Game ${i + 1}`;
    const gameId = `${category.toLowerCase().replace(" ", "-")}-game-${i + 1}`;
    return {
      id: gameId,
      name: gameName,
      description: `Experience the thrill of ${gameName}.`,
      tags,
      image: `https://placehold.co/600x800.png?text=${encodeURIComponent(gameName)}&font=montserrat`,
      onlinePlayers: Math.floor(Math.random() * 5000),
    };
  });

export const allCasinoGames: Category[] = [
  {
    category: "Popular",
    icon: FaFire,
    games: generateGames("Popular", 22, ["top", "trending"]),
  },
  {
    category: "Slot Games",
    icon: PiNumberCircleSevenFill,
    games: generateGames("Slot", 15, ["slots", "jackpot"]),
  },
  {
    category: "Live Dealers",
    icon: IoMdBowtie,
    games: generateGames("Live Dealer", 10, ["live", "real-dealer"]),
  },
  {
    category: "Table Games",
    icon: RiPokerClubsFill,
    games: generateGames("Table", 12, ["blackjack", "poker"]),
  },
  {
    category: "Exclusives",
    icon: FaCrown,
    games: generateGames("Exclusive", 8, ["vip", "members-only"]),
  },
  {
    category: "New Releases",
    icon: MdNewReleases,
    games: generateGames("New Release", 10, ["new", "hot"]),
  },
];

export const allSportsGames: Category[] = [
  {
    category: "Top Sports",
    icon: FaFire,
    games: generateGames("Top Sport", 10, ["trending", "popular"]),
  },
];
