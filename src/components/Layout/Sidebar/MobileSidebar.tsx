"use client";

import { useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { GiPokerHand } from "react-icons/gi";
import { MdSportsBasketball } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

interface MobileSidebarProps {
  toggleSearchMenu: () => void;
  searchMenuOpen: boolean;
  setSearchMenuOpen: (open: boolean) => void;
}

const MobileSidebar = ({
  toggleSearchMenu,
  setSearchMenuOpen,
}: MobileSidebarProps) => {
  const pathname = usePathname();

  useEffect(() => {
    setSearchMenuOpen(false);
  }, [pathname, setSearchMenuOpen]);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 flex justify-around bg-gradient-to-r from-primary to-secondary text-white shadow md:hidden">
      <Link
        href="/"
        className={`flex h-full w-full flex-col items-center justify-center p-2 transition duration-200 hover:bg-white/20 ${
          pathname === "/" ? "bg-white/40" : ""
        }`}
      >
        <GiPokerHand size={24} />
        <span className="text-xs">Casino</span>
      </Link>

      <button
        onClick={toggleSearchMenu}
        className="flex h-full w-full flex-col items-center justify-center p-2 transition duration-200 hover:bg-white/20"
      >
        <IoSearch size={24} />
        <span className="text-xs">Search</span>
      </button>

      <Link
        href="/sports"
        className={`flex h-full w-full flex-col items-center justify-center p-2 transition duration-200 hover:bg-white/20 ${
          pathname === "/sports" ? "bg-white/40" : ""
        }`}
      >
        <MdSportsBasketball size={24} />
        <span className="text-xs">Sports</span>
      </Link>
    </nav>
  );
};

export default MobileSidebar;
