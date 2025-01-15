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
            } bg-gradient-to-r from-primary to-secondary text-white shadow-lg transition-width duration-300 flex flex-col sticky left-0 top-0 bottom-0`}
        >
            <div
                className={`flex ${
                    isExpanded ? "flex-row justify-around" : "flex-col gap-1"
                } items-center p-4 relative`}
            >
                {isExpanded ? (
                    <>
                        <a
                            href="#"
                            className="border font-semibold border-stroke px-3 py-1 rounded bg-primary hover:bg-white/20 transition duration-200 ease-in"
                        >
                            Casino
                        </a>
                        <a
                            href="#"
                            className="border font-semibold border-stroke px-3 py-1 rounded bg-primary hover:bg-white/20 transition duration-200 ease-in"
                        >
                            Sports
                        </a>
                    </>
                ) : (
                    <>
                        <a
                            href="#"
                            className="border font-semibold border-stroke p-1 rounded bg-primary hover:bg-white/20 transition duration-200 ease-in"
                        >
                            <GiPokerHand size={24} />
                        </a>
                        <a
                            href="#"
                            className="border font-semibold border-stroke p-1 rounded bg-primary hover:bg-white/20 transition duration-200 ease-in"
                        >
                            <MdSportsBasketball size={24} />
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
                    className="absolute top-[50%] translate-y-[-50%] right-0 transform translate-x-1/2 p-1.5 rounded-md bg-primary border border-stroke"
                >
                    {isExpanded ? (
                        <FaChevronLeft size={16} />
                    ) : (
                        <FaChevronRight size={16} />
                    )}
                </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-2 text-sm text-white/80 custom-scrollbar">
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
                                            className={`flex items-center justify-between w-full p-2 rounded hover:bg-white/20 ${
                                                submenuOpen === link.name
                                                    ? "bg-white/10"
                                                    : ""
                                            }`}
                                        >
                                            <div
                                                className={`flex items-center gap-3 font-medium ${
                                                    !isExpanded
                                                        ? "justify-center w-full"
                                                        : ""
                                                }`}
                                            >
                                                {link.icon}
                                                {isExpanded && (
                                                    <span>{link.label}</span>
                                                )}
                                            </div>
                                            {isExpanded &&
                                                (submenuOpen === link.name ? (
                                                    <FaChevronUp size={12} />
                                                ) : (
                                                    <FaChevronDown size={12} />
                                                ))}
                                        </button>
                                        {submenuOpen === link.name &&
                                            isExpanded && (
                                                <div className="rounded mt-2 py-1 flex flex-col bg-white/10">
                                                    {link.items.map((item) => (
                                                        <a
                                                            href="#"
                                                            key={item}
                                                            className="p-2 hover:bg-white/20"
                                                        >
                                                            {item}
                                                        </a>
                                                    ))}
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
                                            className={`flex items-center justify-between w-full p-2 rounded hover:bg-white/20 ${
                                                submenuOpen === link.name
                                                    ? "bg-white/10"
                                                    : ""
                                            }`}
                                        >
                                            <div
                                                className={`flex items-center gap-3 font-medium ${
                                                    !isExpanded
                                                        ? "justify-center w-full"
                                                        : ""
                                                }`}
                                            >
                                                {link.icon}
                                                {isExpanded && (
                                                    <span>
                                                        Language:{" "}
                                                        {selectedLanguage}
                                                    </span>
                                                )}
                                            </div>
                                            {isExpanded &&
                                                (submenuOpen === link.name ? (
                                                    <FaChevronUp size={12} />
                                                ) : (
                                                    <FaChevronDown size={12} />
                                                ))}
                                        </button>
                                        {submenuOpen === link.name &&
                                            isExpanded && (
                                                <div className="mt-2 rounded py-1 flex flex-col bg-white/10">
                                                    {link.items.map((item) => (
                                                        <div
                                                            key={item}
                                                            className="p-2 flex items-center"
                                                        >
                                                            <input
                                                                type="radio"
                                                                id={item}
                                                                name="language"
                                                                value={item}
                                                                checked={
                                                                    selectedLanguage ===
                                                                    item
                                                                }
                                                                onChange={() =>
                                                                    handleLanguageChange(
                                                                        item
                                                                    )
                                                                }
                                                                className="mr-2"
                                                            />
                                                            <label
                                                                htmlFor={item}
                                                                className="text-sm"
                                                            >
                                                                {item}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                    </>
                                ) : (
                                    <div className="font-medium">
                                        <a
                                            href="#"
                                            className={`flex items-center w-full gap-3 p-2 rounded hover:bg-white/20 ${
                                                !isExpanded
                                                    ? "justify-center"
                                                    : ""
                                            }`}
                                        >
                                            {link.icon}
                                            {isExpanded && (
                                                <span>{link.label}</span>
                                            )}
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}
                        {index !== links.length - 1 && (
                            <div className="h-0.5 bg-white/80 rounded m-3"></div>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
