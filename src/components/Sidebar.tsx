"use client";

import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { links } from "../data/sidebarData";
import { GiPokerHand } from "react-icons/gi";
import { MdSportsBasketball } from "react-icons/md";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");

  const toggleSubmenu = (item: string) => {
    setSubmenuOpen((prev) => (prev === item ? null : item));
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  return (
    <div
      className={`h-screen ${
        isExpanded ? "w-60" : "w-20"
      } transition-width sticky bottom-0 left-0 top-0 z-20 flex flex-col bg-gradient-to-r from-primary to-secondary text-white shadow-lg duration-300`}
    >
      <div
        className={`flex ${
          isExpanded ? "mb-3 h-14 flex-row shadow-md" : "flex-col gap-1"
        } relative items-center p-3`}
      >
        {isExpanded ? (
          <div className="mx-auto flex gap-3">
            <a
              href="#"
              className="rounded border border-stroke bg-primary px-3 py-1 font-semibold transition duration-200 ease-in hover:bg-white/20"
            >
              Casino
            </a>
            <a
              href="#"
              className="rounded border border-stroke bg-primary px-3 py-1 font-semibold transition duration-200 ease-in hover:bg-white/20"
            >
              Sports
            </a>
          </div>
        ) : (
          <>
            <a
              href="#"
              className="rounded border border-stroke bg-primary p-1 font-semibold transition duration-200 ease-in hover:bg-white/20"
            >
              <GiPokerHand size={30} />
            </a>
            <a
              href="#"
              className="rounded border border-stroke bg-primary p-1 font-semibold transition duration-200 ease-in hover:bg-white/20"
            >
              <MdSportsBasketball size={30} />
            </a>
          </>
        )}
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

      <nav className="custom-scrollbar flex-1 overflow-y-auto px-2 text-sm text-white/80">
        {!isExpanded && <div className="m-3 h-0.5 rounded bg-white/80"></div>}

        {links.map((section, index) => (
          <div key={index}>
            {section.items.map((link) => (
              <div key={link.name} className="mb-2">
                {link.type === "dropdown" ? (
                  <>
                    <button
                      onClick={() => {
                        toggleSubmenu(link.name);
                        setIsExpanded(true);
                      }}
                      className={`flex w-full items-center justify-between rounded p-2 hover:bg-white/20 ${
                        submenuOpen === link.name ? "bg-white/10" : ""
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 font-medium ${
                          !isExpanded ? "w-full justify-center" : ""
                        }`}
                      >
                        {link.icon}
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
                        {link.items &&
                          link.items.map((item) => {
                            if (typeof item === "object" && item.href) {
                              return (
                                <a
                                  href={item.href}
                                  key={item.name}
                                  className="p-2 hover:bg-white/20"
                                >
                                  {item.name}
                                </a>
                              );
                            }
                            return (
                              <div
                                key={
                                  typeof item === "string" ? item : item.name
                                }
                                className="p-2 hover:bg-white/20"
                              >
                                {typeof item === "string" ? item : item.name}
                              </div>
                            );
                          })}
                      </div>
                    )}
                  </>
                ) : link.type === "radio" ? (
                  <>
                    <button
                      onClick={() => {
                        toggleSubmenu(link.name);
                        setIsExpanded(true);
                      }}
                      className={`flex w-full items-center justify-between rounded p-2 hover:bg-white/20 ${
                        submenuOpen === link.name ? "bg-white/10" : ""
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 font-medium ${
                          !isExpanded ? "w-full justify-center" : ""
                        }`}
                      >
                        {link.icon}
                        {isExpanded && (
                          <span>Language: {selectedLanguage}</span>
                        )}
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
                        {link.items &&
                          link.items.map((item) => {
                            if (typeof item === "string") {
                              return (
                                <div
                                  key={item}
                                  className="flex items-center p-2 hover:bg-white/20"
                                >
                                  <input
                                    type="radio"
                                    id={item}
                                    name="language"
                                    value={item}
                                    checked={selectedLanguage === item}
                                    onChange={() => handleLanguageChange(item)}
                                    className="mr-2"
                                  />
                                  <label htmlFor={item} className="text-sm flex-1">
                                    {item}
                                  </label>
                                </div>
                              );
                            }

                            if (typeof item === "object" && item.href) {
                              return (
                                <a
                                  href={item.href}
                                  key={item.name}
                                  className="p-2 hover:bg-white/20"
                                >
                                  {item.name}
                                </a>
                              );
                            }

                            return null;
                          })}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="font-medium">
                    <a
                      href={link.href}
                      className={`flex w-full items-center gap-3 rounded p-2 hover:bg-white/20 ${
                        !isExpanded ? "justify-center" : ""
                      }`}
                    >
                      {link.icon}
                      {isExpanded && <span>{link.label}</span>}
                    </a>
                  </div>
                )}
              </div>
            ))}
            {index !== links.length - 1 && (
              <div className="m-3 h-0.5 rounded bg-white/80"></div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
