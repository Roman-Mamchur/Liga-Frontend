"use client";

import { JSX } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface MenuLinkProps {
  link: {
    name: string;
    label?: string;
    type: "dropdown" | "link" | string;
    icon: JSX.Element;
    href?: string;
    items?: Array<string | { name: string; href: string }>;
  };
  isExpanded: boolean;
  submenuOpen: string | null;
  toggleSubmenu: (item: string) => void;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuLink = ({
  link,
  isExpanded,
  submenuOpen,
  toggleSubmenu,
  setIsExpanded,
}: MenuLinkProps) => {
  const t = useTranslations("Sidebar");
  const pathname = usePathname();
  const isActive = link.href && pathname.startsWith(link.href);

  return (
    <div className="mb-2 text-nowrap">
      {link.type === "dropdown" ? (
        <>
          <button
            onClick={() => {
              if (!isExpanded) setIsExpanded(true);
              toggleSubmenu(link.name);
            }}
            className={`flex w-full items-center justify-between rounded p-2 duration-200 hover:bg-white/20 ${submenuOpen === link.name ? "bg-white/10" : ""}`}
          >
            <div
              className={`flex items-center gap-3 ${!isExpanded ? "w-full justify-center" : ""}`}
            >
              <span>{link.icon}</span>
              {isExpanded && <span>{t(link.name)}</span>}
            </div>
            {isExpanded &&
              (submenuOpen === link.name ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              ))}
          </button>
          {submenuOpen === link.name && isExpanded && (
            <div className="mt-2 flex flex-col rounded bg-white/10 py-1">
              {link.items?.map((item) => (
                <div
                  key={typeof item === "object" ? item.name : item}
                  className={`p-2 duration-200 hover:bg-white/20 ${typeof item === "object" && pathname === item.href ? "bg-white/40" : ""}`}
                >
                  {typeof item === "string" ? (
                    item
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className="flex items-center gap-3"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          href={link.href || "#"}
          className={`flex w-full items-center gap-3 rounded p-2 duration-200 hover:bg-white/20 ${isExpanded ? "" : "md:justify-center"} ${isActive ? "bg-white/40" : ""}`}
        >
          <span>{link.icon}</span>
          {isExpanded && <span>{t(link.name)}</span>}
        </Link>
      )}
    </div>
  );
};

export default MenuLink;
