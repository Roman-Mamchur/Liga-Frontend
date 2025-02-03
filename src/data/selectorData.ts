import {
  FaNetworkWired,
  FaFire,
  FaCrown,
  FaReceipt,
  FaStar,
} from "react-icons/fa6";
import { PiNumberCircleSevenFill } from "react-icons/pi";
import { IoMdBowtie } from "react-icons/io";
import { RiPokerClubsFill } from "react-icons/ri";
import { MdNewReleases } from "react-icons/md";
import { IoTimer } from "react-icons/io5";

export const casinoCategories = [
  { label: "Lobby", icon: FaNetworkWired },
  { label: "Popular", icon: FaFire },
  { label: "Slot Games", icon: PiNumberCircleSevenFill },
  { label: "Live Dealers", icon: IoMdBowtie },
  { label: "Table Games", icon: RiPokerClubsFill },
  { label: "Exclusives", icon: FaCrown },
  { label: "New Releases", icon: MdNewReleases },
];

export const casinoLeaderboards = [
  { label: "My Games", icon: null },
  { label: "All Games", icon: null },
  { label: "High Rollers", icon: null },
  { label: "Race Leaderboard", icon: null },
];

export const sportsCategories = [
  { label: "Lobby", icon: FaNetworkWired },
  { label: "My Bets", icon: FaReceipt },
  { label: "Favorites", icon: FaStar },
  { label: "Starting Soon", icon: IoTimer },
];

export const faqCategories = [
  { label: "General", icon: null },
  { label: "Affiliate program", icon: null },
  { label: "Earnings", icon: null },
];
