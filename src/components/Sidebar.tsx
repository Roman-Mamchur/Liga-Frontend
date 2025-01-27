"use client";

import { JSX, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { links } from "@/data/sidebarData";
import { GiPokerHand } from "react-icons/gi";
import { MdSportsBasketball } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import SearchBar from "./Search/SearchBar";

// Component for Menu Link rendering
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
}: MenuLinkProps) => (
  <div className="mb-2">
    {link.type === "dropdown" ? (
      <>
        <button
          onClick={() => {
            if (!isExpanded) {
              setIsExpanded(true);
            }
            toggleSubmenu(link.name);
          }}
          className={`flex w-full items-center justify-between rounded p-2 hover:bg-white/20 ${
            submenuOpen === link.name ? "bg-white/10" : ""
          }`}
        >
          <div
            className={`flex items-center gap-3 font-medium ${!isExpanded ? "w-full justify-center" : ""}`}
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
            {link.items?.map((item) => (
              <div
                key={typeof item === "object" ? item.name : item}
                className="p-2 hover:bg-white/20"
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
    ) : link.type === "radio" ? (
      <>
        <button
          onClick={() => {
            if (!isExpanded) {
              setIsExpanded(true);
            }
            toggleSubmenu(link.name);
          }}
          className={`flex w-full items-center justify-between rounded p-2 hover:bg-white/20 ${
            submenuOpen === link.name ? "bg-white/10" : ""
          }`}
        >
          <div
            className={`flex items-center gap-3 font-medium ${!isExpanded ? "w-full justify-center" : ""}`}
          >
            {link.icon}
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
            {link.items?.map((item) => {
              if (typeof item === "string") {
                return (
                  <div
                    key={item}
                    className="flex items-center p-2 hover:bg-white/20"
                    onClick={() => handleLanguageChange(item)}
                  >
                    <input
                      type="radio"
                      id={item}
                      name="language"
                      value={item}
                      checked={selectedLanguage === item}
                      onChange={() => handleLanguageChange(item)}
                      className="mr-2 h-4 w-4 rounded-full border-2 border-white/80"
                    />
                    <label htmlFor={item} className="flex-1 text-sm">
                      {item}
                    </label>
                  </div>
                );
              }
              return item.href ? (
                <Link
                  href={item.href}
                  key={item.name}
                  className="p-2 hover:bg-white/20"
                >
                  {item.name}
                </Link>
              ) : null;
            })}
          </div>
        )}
      </>
    ) : (
      <a
        href={link.href}
        className={`${isExpanded ? "" : "md:justify-center"} flex w-full items-center gap-3 rounded p-2 hover:bg-white/20`}
      >
        {link.icon}
        {isExpanded && <span>{link.label}</span>}
      </a>
    )}
  </div>
);

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");
  const [searchMenuOpen, setSearchMenuOpen] = useState(false);

  const toggleSubmenu = (item: string) => {
    setSubmenuOpen((prev) => (prev === item ? null : item));
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  const toggleSearchMenu = () => {
    setSearchMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Sidebar container */}
      <div
        className={`hidden h-screen ${isExpanded ? "w-60" : "w-20"} transition-width sticky bottom-0 left-0 top-0 z-20 flex-col bg-gradient-to-r from-primary to-secondary text-white shadow-lg duration-300 md:flex`}
      >
        <div
          className={`flex ${isExpanded ? "mb-3 h-14 flex-row shadow-md" : "flex-col gap-1"} relative items-center p-3`}
        >
          {/* Sidebar top action buttons */}
          {isExpanded ? (
            <div className="mx-auto flex gap-3">
              <Link
                href="/"
                className="rounded border border-stroke bg-primary px-3 py-1 font-semibold transition duration-200 ease-in hover:bg-white/20"
              >
                Casino
              </Link>
              <Link
                href="#"
                className="rounded border border-stroke bg-primary px-3 py-1 font-semibold transition duration-200 ease-in hover:bg-white/20"
              >
                Sports
              </Link>
            </div>
          ) : (
            <>
              <Link
                href="#"
                className="rounded border border-stroke bg-primary p-1 font-semibold transition duration-200 ease-in hover:bg-white/20"
              >
                <GiPokerHand size={30} />
              </Link>
              <Link
                href="#"
                className="rounded border border-stroke bg-primary p-1 font-semibold transition duration-200 ease-in hover:bg-white/20"
              >
                <MdSportsBasketball size={30} />
              </Link>
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

        {/* Sidebar links */}
        <nav className="sidebar-scrollbar flex-1 overflow-y-auto px-2 text-sm text-white/80">
          {!isExpanded && <div className="m-3 h-0.5 rounded bg-white/80"></div>}

          {links.map((section, index) => (
            <div key={index}>
              {section.items.map((link) => (
                <MenuLink
                  key={link.name}
                  link={link}
                  isExpanded={isExpanded}
                  submenuOpen={submenuOpen}
                  toggleSubmenu={toggleSubmenu}
                  selectedLanguage={selectedLanguage}
                  handleLanguageChange={handleLanguageChange}
                  setIsExpanded={setIsExpanded}
                />
              ))}
              {index !== links.length - 1 && (
                <div className="m-3 h-0.5 rounded bg-white/80"></div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 flex justify-around bg-gradient-to-r from-primary to-secondary text-white text-opacity-80 shadow md:hidden">
        <Link
          href="/"
          className="flex h-full w-full flex-col items-center justify-center p-2 transition duration-200 hover:bg-white/20"
        >
          <GiPokerHand size={24} />
          <span className="text-xs">Casino</span>
        </Link>
        <button
          onClick={toggleSearchMenu}
          className="flex h-full w-full flex-col items-center justify-center p-2 transition duration-200 hover:bg-white/20"
        >
          <IoSearch size={24} />
          <span className="text-xs">Search</span>
        </button>
        <Link
          href="/"
          className="flex h-full w-full flex-col items-center justify-center p-2 transition duration-200 hover:bg-white/20"
        >
          <MdSportsBasketball size={24} />
          <span className="text-xs">Sports</span>
        </Link>
      </nav>

      {/* Search Menu */}
      {searchMenuOpen && (
        <div
          className="sidebar-scrollbar absolute z-10 w-screen overflow-y-auto bg-primary md:hidden"
          style={{
            top: "calc(var(--top-navbar-height, 56px))",
            bottom: "calc(var(--bottom-menubar-height, 56px))",
          }}
        >
          {/* <div className="container my-5">
            <SearchBar triggerType="mobile" />
            <div className="mt-4 text-white">
              {links.map((section, index) => (
                <div key={index}>
                  {section.items.map((link) => (
                    <MenuLink
                      key={link.name}
                      link={link}
                      isExpanded={true}
                      submenuOpen={submenuOpen}
                      toggleSubmenu={toggleSubmenu}
                      selectedLanguage={selectedLanguage}
                      handleLanguageChange={handleLanguageChange}
                      setIsExpanded={setIsExpanded}
                    />
                  ))}
                  {index !== links.length - 1 && (
                    <div className="m-3 h-0.5 rounded bg-white/80"></div>
                  )}
                </div>
              ))}
            </div>
          </div> */}

          <div className="container my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos at
            ipsam cum quae sunt itaque hic nam dolore laboriosam quibusdam
            maiores quidem, velit quam necessitatibus voluptatem sed alias
            consectetur cupiditate dolorem ex quas nostrum provident molestiae
            harum? Deleniti fuga dolore soluta, quo neque fugit iste
            perspiciatis mollitia in suscipit quod exercitationem obcaecati
            libero corrupti, alias omnis eligendi itaque sed eos. Ex animi amet,
            nostrum consectetur commodi odit expedita laudantium laboriosam
            assumenda ipsa quo ipsam provident deserunt vitae cupiditate
            repellat architecto explicabo aperiam voluptas. Ipsa iure non
            minima? Optio exercitationem inventore culpa eos deserunt natus
            voluptatibus repellendus rem mollitia ipsam, voluptatem, libero,
            maxime aperiam consequatur quas asperiores aspernatur incidunt?
            Perspiciatis necessitatibus tempore similique voluptates quas
            officiis minus quam deserunt, dolorem possimus molestiae dolor
            aspernatur nemo! Earum quis quaerat tenetur! Eaque, ratione
            voluptatum quisquam blanditiis iure doloremque similique atque culpa
            tempora eum ea dolor cum neque quidem consequatur pariatur!
            Molestias assumenda corrupti a soluta ea officia illo, sit quasi
            quos quis, ad, debitis vitae dolorum sed? Optio earum tenetur velit
            neque ducimus accusantium? Minus quasi praesentium fugiat atque
            optio veniam dolor molestiae, aliquam, debitis consequuntur aperiam
            quidem, est inventore nemo ex beatae voluptatum distinctio amet
            voluptates sit dolorum asperiores doloribus neque? Atque et, dolores
            doloribus inventore optio laboriosam non praesentium voluptate
            architecto iste eaque iusto quo ducimus minima sit fuga numquam
            accusamus facilis nam dolore quisquam! Nesciunt ut nemo nihil
            commodi, aut aliquam recusandae molestias voluptatum quaerat? Illum
            dolor hic magnam asperiores iste dolores, possimus consequatur
            doloremque, cum quibusdam minus! Corrupti qui hic sunt at
            laboriosam, vitae illum inventore odit debitis sint eum id, fuga
            autem optio accusamus voluptas provident ut laudantium earum
            voluptatem vel. Autem quasi tempore at nobis ut ducimus voluptatem
            reiciendis molestias earum officiis aliquam odio dignissimos dolores
            mollitia aspernatur deserunt ab quae, officia est assumenda unde
            voluptatum? Accusantium ex suscipit officia veniam sapiente enim
            minima quas quo molestiae ducimus labore ea, reprehenderit eius eum
            quia obcaecati, quis facilis inventore non mollitia voluptatum.
            Magnam modi animi quia aperiam id nobis impedit natus distinctio
            commodi delectus soluta consectetur dolor, dicta rerum! Harum
            quibusdam sed cum excepturi porro molestias voluptatem quasi
            numquam, eos unde praesentium placeat sunt debitis minima similique.
            Suscipit, sed quis accusamus, corporis sunt praesentium reiciendis
            nostrum deserunt recusandae natus ad illum eveniet vitae aperiam hic
            voluptatibus. Ullam inventore quos dolorem obcaecati doloribus
            molestias. Eligendi ipsam, cupiditate cum praesentium, hic quaerat
            libero officiis magnam, quibusdam inventore quisquam dignissimos
            quod sequi temporibus corporis delectus facilis aliquid
            exercitationem reprehenderit. Quas itaque minima consectetur est.
            Voluptas ullam sapiente doloribus laborum odit eveniet maiores
            voluptatibus quae odio sunt assumenda eligendi saepe nisi laboriosam
            maxime, dolor consequuntur ea est reiciendis nostrum, quam repellat
            obcaecati facere quibusdam? Placeat impedit ex vero quia ipsam unde
            sequi itaque temporibus quasi cupiditate voluptatem voluptatum
            exercitationem, sapiente nisi soluta, eaque odit quas dolore nobis
            ea quae? Optio natus nesciunt porro eveniet fuga velit hic fugit
            ullam quae quo. Alias perferendis, accusantium odit et molestiae
            hic? Impedit eos quaerat iure optio ea similique nihil! Impedit iste
            nesciunt fuga libero ducimus.
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
