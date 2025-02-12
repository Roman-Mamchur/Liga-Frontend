"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import { BsMegaphone } from "react-icons/bs";
import { FaBell, FaRegBell, FaXmark } from "react-icons/fa6";
import { useRef } from "react";
import { messages } from "@/data/messagesMockData";

export default function NotificationDropdown() {
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const maxNotifications = 5;
  const displayedNotifications = messages.slice(0, maxNotifications);

  return (
    <Menu as="div" className="relative">
      {/* Notification Bell Icon */}
      <MenuButton ref={menuButtonRef} className="block">
        <div className="rounded-full p-3 duration-200 hover:bg-card">
          <FaBell className="opacity-80" />
        </div>
      </MenuButton>

      {/* Dropdown Menu */}
      <MenuItems
        transition
        className="focus:outline-hidden absolute right-0 z-50 mt-5 w-80 origin-top-right rounded bg-white shadow-lg ring-1 ring-black/5"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-4">
          <span className="flex items-center gap-2">
            <FaRegBell size={20} className="text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-800">
              Notifications
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
                  className={`block p-4 text-sm transition ${
                    notification.seen
                      ? "text-gray-800 hover:bg-gray-100"
                      : "font-semibold text-primary hover:bg-orange-100"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <h4
                      className={`${notification.seen ? "font-medium" : "font-bold"}`}
                    >
                      {notification.title}
                    </h4>
                    {!notification.seen && (
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    )}
                  </div>
                  <p className="mt-1 text-gray-600">
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
            <p className="font-semibold">No Notifications Available</p>
            <span className="text-sm">
              Your interactions will be visible here
            </span>
          </div>
        )}

        {/* Footer Link */}
        <div className="border-t p-4 text-center">
          <Link
            href="/profile/messages"
            className="text-sm font-medium text-primary hover:underline"
          >
            View All Notifications
          </Link>
        </div>
      </MenuItems>
    </Menu>
  );
}
