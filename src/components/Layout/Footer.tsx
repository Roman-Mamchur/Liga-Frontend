"use client";

import { useState } from "react";
import { links } from "@/data/footerData";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { FaLine, FaTelegram } from "react-icons/fa6";
import { IoLogoWechat } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { dropdownMotion, motionVariants } from "@/utils/framerUtil";

const Footer = () => {
  const t = useTranslations("Footer");

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <div className="mt-5 h-fit w-full bg-white py-4">
      <div className="container flex flex-col">
        <div className="mx-auto mb-2 w-fit md:mx-0 md:mb-0">
          <Link href="/" as={"image"}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              priority={true}
              className="h-14 w-auto"
              style={{ width: "auto", height: 60 }}
            />
          </Link>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <p className="text-sm">&copy; {t("copyright")}</p>
          <div className="flex gap-3 opacity-80">
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

        <div className="flex flex-wrap justify-between md:gap-5">
          {links.map((link, index) => (
            <div
              key={index}
              className="mb-3 flex w-full flex-col rounded bg-card shadow-md md:w-auto md:flex-1 md:bg-transparent md:shadow-none"
            >
              <h3
                className="flex cursor-pointer items-center justify-between rounded p-3 font-bold md:block md:cursor-default md:p-1"
                onClick={() => toggleDropdown(index)}
              >
                <span>{t(`categories.${link.label}`)}</span>

                <span className="ml-2 md:hidden">
                  <div
                    className={`transition-transform duration-200 ${openDropdown === index ? "rotate-0" : "rotate-90"}`}
                  >
                    <FaChevronDown />
                  </div>
                </span>
              </h3>

              <div className="block md:hidden">
                <motion.div
                  className="overflow-hidden"
                  {...motionVariants}
                  variants={dropdownMotion(openDropdown === index)}
                >
                  <ul className="border-t border-gray-300 py-2 text-sm opacity-80 md:border-none">
                    {link.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="w-full transition duration-200 hover:bg-white/60 md:rounded md:hover:bg-card"
                      >
                        <Link href={item.href}>
                          <p className="px-3 py-1 md:px-1">
                            {t(`items.${item.name}`)}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              <div className="hidden md:block">
                <ul className="py-2 text-sm opacity-80">
                  {link.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="w-full rounded transition duration-200 hover:bg-card"
                    >
                      <Link href={item.href}>
                        <p className="p-1">{t(`items.${item.name}`)}</p>
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
