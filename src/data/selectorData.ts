import { FaNetworkWired, FaFire, FaCrown } from "react-icons/fa6";
import { PiNumberCircleSevenFill } from "react-icons/pi";
import { IoMdBowtie } from "react-icons/io";
import { RiPokerClubsFill } from "react-icons/ri";
import { MdNewReleases } from "react-icons/md";

export const categories = [
  { label: "Lobby", icon: FaNetworkWired },
  { label: "Popular", icon: FaFire },
  { label: "Slot Games", icon: PiNumberCircleSevenFill },
  { label: "Live Dealers", icon: IoMdBowtie },
  { label: "Table Games", icon: RiPokerClubsFill },
  { label: "Exclusives", icon: FaCrown },
  { label: "New Releases", icon: MdNewReleases },
];

export const leaderboards = [
  { label: "My Games", icon: null },
  { label: "All Games", icon: null },
  { label: "High Rollers", icon: null },
  { label: "Race Leaderboard", icon: null },
];
