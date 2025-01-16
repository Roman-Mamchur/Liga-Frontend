"use client";

import { useState } from "react";
import { links } from "@/data/footerData";
import Image from "next/image";
import Link from "next/link";
import { FaLine, FaTelegram } from "react-icons/fa6";
import { IoLogoWechat } from "react-icons/io5";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <div className="mt-5 h-fit w-full bg-white py-4">
      <div className="container flex flex-col">
        <div className="w-fit">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: 60 }}
            />
          </Link>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm">&copy; 2025 FaFa878 | All Rights Reserved.</p>
          <div className="flex gap-3 text-foreground">
            <Link href="#">
              <FaLine size={24} />
            </Link>
            <Link href="#">
              <FaTelegram size={24} />
            </Link>
            <Link href="#">
              <IoLogoWechat size={24} />
            </Link>
          </div>
        </div>

        <div className="my-2 h-0.5 w-full rounded-xl bg-foreground opacity-30"></div>

        <div className="gap-5 flex flex-wrap justify-between">
          {links.map((link, index) => (
            <div
              key={index}
              className="mb-3 flex w-full md:flex-1 flex-col rounded bg-secondBackground md:w-auto md:bg-transparent"
            >
              <h3
                onClick={() => toggleDropdown(index)}
                className="flex cursor-pointer items-center justify-between rounded p-3 font-bold md:block md:cursor-default md:p-1"
              >
                <span>{link.label}</span>

                <span className="ml-2 md:hidden">
                  {openDropdown === index ? (
                    <FaChevronLeft size={14} />
                  ) : (
                    <FaChevronDown size={14} />
                  )}
                </span>
              </h3>

              <div
                className={`${openDropdown === index ? "block border-t border-gray-300" : "hidden"} md:block`}
              >
                <ul className="py-2 text-sm opacity-80">
                  {link.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="w-full transition duration-200 hover:bg-white/60 md:rounded md:hover:bg-secondBackground"
                    >
                      <Link href={item.href}>
                        <p className="px-3 py-1 md:px-1">{item.name}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
