"use client";

import { JSX } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuLinkProps {
  link: {
    name: string;
    label?: string;
    type: "dropdown" | "radio" | "link" | string;
    icon?: JSX.Element;
    href?: string;
    items?: Array<string | { name: string; href?: string }>;
  };
  isExpanded: boolean;
  submenuOpen: string | null;
  toggleSubmenu: (item: string) => void;
  selectedLanguage: string;
  handleLanguageChange: (language: string) => void;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuLink = ({
  link,
  isExpanded,
  submenuOpen,
  toggleSubmenu,
  selectedLanguage,
  handleLanguageChange,
  setIsExpanded,
}: MenuLinkProps) => {
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
              className={`flex items-center gap-3 font-medium ${!isExpanded ? "w-full justify-center" : ""}`}
            >
              <span>{link.icon}</span>
              {isExpanded && <span>{link.label}</span>}
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
                  className="p-2 duration-200 hover:bg-white/20"
                >
                  {typeof item === "string" ? (
                    item
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className={`flex items-center gap-3 ${pathname === item.href ? "bg-white/40" : ""}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      ) : link.type === "radio" ? (
        <>
          <button
            onClick={() => {
              if (!isExpanded) setIsExpanded(true);
              toggleSubmenu(link.name);
            }}
            className={`flex w-full items-center justify-between rounded p-2 duration-200 hover:bg-white/20 ${submenuOpen === link.name ? "bg-white/10" : ""}`}
          >
            <div
              className={`flex items-center gap-3 font-medium ${!isExpanded ? "w-full justify-center" : ""}`}
            >
              <span>{link.icon}</span>
              {isExpanded && <span>Language: {selectedLanguage}</span>}
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
                  key={typeof item === "string" ? item : item.name}
                  className="flex items-center p-2 duration-200 hover:bg-white/20"
                  onClick={() =>
                    typeof item === "string" && handleLanguageChange(item)
                  }
                >
                  <input
                    type="radio"
                    id={typeof item === "string" ? item : ""}
                    name="language"
                    value={typeof item === "string" ? item : ""}
                    checked={selectedLanguage === item}
                    onChange={() =>
                      typeof item === "string" && handleLanguageChange(item)
                    }
                    className="mr-2 h-4 w-4 rounded-full border-2 border-white/80"
                  />
                  <label
                    htmlFor={typeof item === "string" ? item : ""}
                    className="flex-1 text-sm"
                  >
                    {typeof item === "string" ? item : item.name}
                  </label>
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
          {isExpanded && <span>{link.label}</span>}
        </Link>
      )}
    </div>
  );
};

export default MenuLink;
