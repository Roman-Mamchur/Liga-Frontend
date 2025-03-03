"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "@/i18n/routing";
import { BsMegaphone } from "react-icons/bs";
import { FaBell, FaRegBell, FaXmark } from "react-icons/fa6";
import { useRef } from "react";
import { Message, messages } from "@/data/messagesMockData";
import { useTranslations } from "next-intl";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/slices/messageModalSlice";
import { headlessUiMotion } from "@/utils/framerUtil";
import { AnimatePresence, motion } from "framer-motion";

export default function NotificationDropdown() {
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const maxNotifications = 5; // set to 0 to display no notifications, 5 default
  const displayedNotifications = messages.slice(0, maxNotifications);

  const t = useTranslations("Header.notificationsDropdown");

  const dispatch = useDispatch();

  const handleMessageClick = (message: Message) => {
    dispatch(openModal(message));
  };

  return (
    <Menu as="div" className="relative">
      {/* Notification Bell Icon */}
      <MenuButton ref={menuButtonRef} className="block">
        <div className="rounded-full p-3 duration-200 hover:bg-card">
          <FaBell className="opacity-80" />
        </div>
      </MenuButton>

      {/* Dropdown Menu */}
      <AnimatePresence>
        <MenuItems
          className="focus:outline-hidden absolute right-0 z-50 mt-5 w-80 origin-top-right rounded bg-white shadow-lg ring-1 ring-black/5"
          as={motion.div}
          key="menu-items"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={headlessUiMotion}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b p-4">
            <span className="flex items-center gap-2">
              <FaRegBell size={20} className="text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-800">
                {t("label")}
              </h3>
            </span>
            <FaXmark
              size={18}
              className="cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={() => menuButtonRef.current?.click()}
            />
          </div>

          {/* Notifications List */}
          {displayedNotifications.length > 0 ? (
            <div className="max-h-96 divide-y overflow-y-auto">
              {displayedNotifications.map((notification) => (
                <MenuItem key={notification.id}>
                  <Link
                    href="#"
                    className={`relative block p-4 pl-10 text-sm transition ${
                      notification.seen
                        ? "text-gray-800 hover:bg-gray-100"
                        : "font-semibold text-primary hover:bg-accentOpacity"
                    }`}
                    onClick={() => handleMessageClick(notification)}
                  >
                    <div className="flex items-center gap-1">
                      <h4
                        className={`truncate ${notification.seen ? "font-medium" : "font-bold"}`}
                      >
                        {notification.title}
                      </h4>
                      {!notification.seen && (
                        <div className="absolute left-5 h-2 w-2 rounded-full bg-primary"></div>
                      )}
                    </div>
                    <p className="mt-1 truncate text-gray-600">
                      {notification.description}
                    </p>
                    <span className="mt-2 text-xs text-gray-500">
                      {notification.date}
                    </span>
                  </Link>
                </MenuItem>
              ))}
            </div>
          ) : (
            // No Notifications Message
            <div className="flex flex-col items-center p-4 text-center text-gray-500">
              <BsMegaphone size={40} className="mb-3 text-gray-300" />
              <p className="font-semibold">{t("empty")}</p>
              <span className="text-sm">{t("description")}</span>
            </div>
          )}

          {/* Footer Link */}
          <div className="border-t p-4 text-center">
            <Link
              href="/profile/messages"
              className="text-sm font-medium text-primary hover:underline"
              onClick={() => menuButtonRef.current?.click()}
            >
              {t("seeAll")}
            </Link>
          </div>
        </MenuItems>
      </AnimatePresence>
    </Menu>
  );
}
