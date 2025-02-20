"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { FaBitcoin, FaChevronDown, FaWallet } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import ProfileDropdown from "../Dropdown/ProfileDropdown";
import NotificationDropdown from "../Dropdown/NotificationDropdown";
import SearchBar from "../Search/SearchBar";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/slices/authModalSlice";
import { useTranslations } from "next-intl";

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const mockLogin = true;
  const dispatch = useDispatch();

  const t = useTranslations("Header");

  return (
    <>
      <header className="sticky top-0 z-10 flex h-14 w-full justify-center bg-white shadow-md">
        <div className="container flex items-center justify-between gap-5">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              priority={true}
              className="h-auto w-32 cursor-pointer"
            />
          </Link>
          {mockLogin ? (
            <>
            {/* Wallet box */}
              <div className="hidden w-fit text-sm font-semibold md:flex">
                <div className="flex flex-1 cursor-pointer items-center justify-between gap-5 rounded-l bg-card p-2.5 duration-200 hover:bg-black/20">
                  <span>0.00000000</span>
                  <span className="flex gap-2">
                    <FaBitcoin className="text-primary" />
                    <FaChevronDown />
                  </span>
                </div>
                <div className="flex cursor-pointer items-center justify-center rounded-r bg-primary p-2.5 text-white duration-200 hover:bg-secondary">
                  <span className="hidden lg:block">{t("wallet")}</span>
                  <span className="lg:hidden">
                    <FaWallet />
                  </span>
                </div>
              </div>
              {/* Menu buttons */}
              <div className="flex items-center justify-end gap-1 text-sm">
                <span
                  onClick={() => setIsSearchVisible((prev) => !prev)}
                  className="hidden cursor-pointer items-center gap-2 rounded-full p-3 duration-200 hover:bg-card md:flex"
                >
                  <FaSearch className="opacity-80" />
                  <span className="hidden lg:block">{t("search")}</span>
                </span>
                <ProfileDropdown />
                <NotificationDropdown />
              </div>
            </>
          ) : (
            <div className="flex items-center space-x-4 text-xs font-bold md:text-sm">
              <button
                onClick={() => dispatch(openModal("login"))}
                className="rounded border-2 border-foreground p-2 transition-transform duration-200 hover:scale-105 md:px-6 md:py-2"
              >
                {t("login")}
              </button>
              <button
                onClick={() => dispatch(openModal("register"))}
                className="rounded border-2 border-primary bg-primary p-2 text-white transition-transform duration-200 hover:scale-105 md:px-6 md:py-2"
              >
                {t("register")}
              </button>
            </div>
          )}
        </div>
        {isSearchVisible && (
          <div className="absolute left-0 top-14 w-full">
            <div className="container relative mx-auto mt-3">
              <SearchBar
                triggerType="header"
                onClose={() => setIsSearchVisible(false)}
              />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
