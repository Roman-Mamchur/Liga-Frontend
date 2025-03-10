"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { links } from "@/data/sidebarData";
import SearchBar from "../../Search/SearchBar";
import MenuLink from "./MenuLink";
import MobileSidebar from "./MobileSidebar";
import LocaleSwitcherDropdown from "@/components/Dropdown/LocaleSwitcherDropdown";
import { useTranslations } from "next-intl";
import { FaHeadset } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/slices/supportModalSlice";
import { AnimatePresence, motion } from "framer-motion";
import { motionVariants, searchMenuMotion } from "@/utils/framerUtil";
import MainLinks from "./MainLinks";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);
  const [searchMenuOpen, setSearchMenuOpen] = useState(false);

  const t = useTranslations("Sidebar");

  const dispatch = useDispatch();

  const toggleSubmenu = (item: string) => {
    setSubmenuOpen((prev) => (prev === item ? null : item));
  };

  const toggleSearchMenu = () => {
    setSearchMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`hidden h-screen ${isExpanded ? "w-60" : "w-20"} transition-width sticky bottom-0 left-0 top-0 z-20 flex-col bg-gradient-to-r from-primary to-secondary text-white shadow-lg duration-300 md:flex`}
      >
        <div
          className={`flex ${isExpanded ? "mb-3 h-14 flex-row shadow-md" : "flex-col gap-1"} relative items-center p-3`}
        >
          <MainLinks isExpanded={isExpanded} />
          <button
            onClick={() => {
              setIsExpanded(!isExpanded);
              if (isExpanded) {
                setSubmenuOpen(null);
              }
            }}
            className="absolute right-0 top-[50%] translate-x-1/2 translate-y-[-50%] transform rounded-md border border-stroke bg-primary p-1.5"
          >
            {isExpanded ? (
              <FaChevronLeft size={16} />
            ) : (
              <FaChevronRight size={16} />
            )}
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="sidebar-scrollbar mb-3 flex-1 overflow-y-auto px-2 text-sm text-white/80">
          {!isExpanded && <div className="m-3 h-0.5 rounded bg-white/80"></div>}
          {/* Links from sidebarData */}
          {links.map((section, index) => (
            <div key={index}>
              {section.items.map((link) => (
                <MenuLink
                  key={link.name}
                  link={link}
                  isExpanded={isExpanded}
                  submenuOpen={submenuOpen}
                  toggleSubmenu={toggleSubmenu}
                  setIsExpanded={setIsExpanded}
                />
              ))}
              {index !== links.length - 1 && (
                <div className="m-3 h-0.5 rounded bg-white/80"></div>
              )}
            </div>
          ))}

          <div className="m-3 h-0.5 rounded bg-white/80"></div>

          {/* Live Support Modal Button */}
          <div
            className={`my-2 flex w-full cursor-pointer items-center gap-3 text-nowrap rounded p-2 duration-200 hover:bg-white/20 ${isExpanded ? "" : "md:justify-center"}`}
            onClick={() => dispatch(openModal())}
          >
            <span>
              <FaHeadset className="size-5" />
            </span>
            {isExpanded && <span>{t("support")}</span>}
          </div>

          {/* Language Switcher */}
          <LocaleSwitcherDropdown
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
            device="desktop"
          />
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar
        toggleSearchMenu={toggleSearchMenu}
        searchMenuOpen={searchMenuOpen}
        setSearchMenuOpen={setSearchMenuOpen}
      />

      {/* Search Menu */}
      <AnimatePresence>
        {searchMenuOpen && (
          <motion.nav
            className="sidebar-scrollbar absolute bottom-14 top-14 z-10 w-screen overflow-y-auto bg-primary md:hidden"
            key="search-menu"
            {...motionVariants}
            variants={searchMenuMotion}
          >
            <div className="container my-5">
              <SearchBar triggerType="mobile" />
              <div className="mt-4 text-white">
                {/* Links from sidebarData */}
                {links.map((section, index) => (
                  <div key={index}>
                    {section.items.map((link) => (
                      <MenuLink
                        key={link.name}
                        link={link}
                        isExpanded={true}
                        submenuOpen={submenuOpen}
                        toggleSubmenu={toggleSubmenu}
                        setIsExpanded={setIsExpanded}
                      />
                    ))}
                    {index !== links.length - 1 && (
                      <div className="m-3 h-0.5 rounded bg-white/80"></div>
                    )}
                  </div>
                ))}

                <div className="m-3 h-0.5 rounded bg-white/80"></div>

                {/* Live Support Modal Button */}
                <div
                  className="my-2 flex w-full cursor-pointer items-center gap-3 text-nowrap rounded p-2 duration-200 hover:bg-white/20"
                  onClick={() => dispatch(openModal())}
                >
                  <span>
                    <FaHeadset className="size-5" />
                  </span>
                  <span>{t("support")}</span>
                </div>

                {/* Language Switcher */}
                <LocaleSwitcherDropdown
                  isExpanded={isExpanded}
                  setIsExpanded={setIsExpanded}
                  device="mobile"
                />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
