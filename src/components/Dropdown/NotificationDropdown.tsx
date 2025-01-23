"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import { BsMegaphone } from "react-icons/bs";
import { FaBell, FaRegBell, FaXmark } from "react-icons/fa6";
import { useRef } from "react";

export default function NotificationDropdown() {
  const mockNotifications = [
    {
      id: 1,
      title: "New Feature Launched!",
      description: "Check out the latest feature in your dashboard.",
      date: "1 hour ago",
    },
    {
      id: 2,
      title: "Account Update",
      description: "Your profile has been successfully updated.",
      date: "Yesterday",
    },
    {
      id: 3,
      title: "Payment Received",
      description: "We've received your subscription payment.",
      date: "2 days ago",
    },
  ];

  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Menu as="div" className="relative">
      <MenuButton ref={menuButtonRef} className="block">
        <div className="rounded-full p-3 duration-200 hover:bg-card">
          <FaBell className="opacity-80" />
        </div>
      </MenuButton>

      <MenuItems
        transition
        className="focus:outline-hidden absolute right-0 z-50 mt-5 w-80 origin-top-right rounded bg-white shadow-lg ring-1 ring-black/5"
      >
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

        {mockNotifications.length > 0 ? (
          <>
            <div className="divide-y">
              {mockNotifications.map((notification) => (
                <MenuItem key={notification.id}>
                  <Link
                    href="#"
                    className="block p-4 text-sm text-gray-800 transition hover:bg-gray-100"
                  >
                    <h4 className="font-medium">{notification.title}</h4>
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
            <div className="border-t p-4 text-center">
              <Link
                href="#"
                className="text-sm font-medium text-blue-500 hover:underline"
              >
                View All Notifications
              </Link>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center p-4 text-center text-gray-500">
            <BsMegaphone size={40} className="mb-3 text-gray-300" />
            <p className="font-semibold">No Notifications Available</p>
            <span className="text-sm">
              Your interactions will be visible here
            </span>
          </div>
        )}
      </MenuItems>
    </Menu>
  );
}
