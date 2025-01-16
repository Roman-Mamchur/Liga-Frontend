import { FaBasketballBall, FaGift } from "react-icons/fa";
import { MdCasino, MdLanguage } from "react-icons/md";
import { GiChicken, GiReceiveMoney } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { FaHandshakeSimple } from "react-icons/fa6";
import { TbAffiliateFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { RiVipCrown2Fill } from "react-icons/ri";

export const links = [
  {
    items: [
      {
        name: "casino",
        type: "dropdown",
        icon: MdCasino({ size: 20 }),
        label: "Casino",
        items: [
          { name: "Casino A", href: "#casino-a" },
          { name: "Casino B", href: "#casino-b" },
          { name: "Casino C", href: "#casino-c" },
          { name: "Casino D", href: "#casino-d" },
        ],
      },
      {
        name: "sports",
        type: "dropdown",
        icon: FaBasketballBall({ size: 20 }),
        label: "Sports",
        items: [
          { name: "Sports A", href: "#sports-a" },
          { name: "Sports B", href: "#sports-b" },
        ],
      },
      {
        name: "cockfight",
        type: "dropdown",
        icon: GiChicken({ size: 20 }),
        label: "Cockfight",
        items: [
          { name: "Cockfight A", href: "#cockfight-a" },
          { name: "Cockfight B", href: "#cockfight-b" },
        ],
      },
      {
        name: "lottery",
        type: "dropdown",
        icon: GoGoal({ size: 20 }),
        label: "Lottery",
        items: [
          { name: "Lottery A", href: "#lottery-a" },
          { name: "Lottery B", href: "#lottery-b" },
        ],
      },
    ],
  },
  {
    items: [
      {
        name: "promotions",
        type: "link",
        icon: FaGift({ size: 20 }),
        label: "Promotions",
        href: "#promotions",
      },
      {
        name: "rewards",
        type: "link",
        icon: GiReceiveMoney({ size: 20 }),
        label: "Rewards",
        href: "#rewards",
      },
      {
        name: "affiliate",
        type: "link",
        icon: TbAffiliateFilled({ size: 20 }),
        label: "Affiliate",
        href: "#affiliate",
      },
      {
        name: "vip",
        type: "link",
        icon: RiVipCrown2Fill({ size: 20 }),
        label: "VIP Club",
        href: "#vip",
      },
    ],
  },
  {
    items: [
      {
        name: "sponsorships",
        type: "dropdown",
        icon: FaHandshakeSimple({ size: 20 }),
        label: "Sponsorships",
        items: [
          { name: "Sponsorships A", href: "#sponsorships-a" },
          { name: "Sponsorships B", href: "#sponsorships-b" },
        ],
      },
      {
        name: "liveSupport",
        type: "link",
        icon: BiSupport({ size: 20 }),
        label: "Live Support",
        href: "#support",
      },
      {
        name: "language",
        type: "radio",
        icon: MdLanguage({ size: 20 }),
        items: ["English", "Chinese", "Japanese", "Korean"],
      },
    ],
  },
];
