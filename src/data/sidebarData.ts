import { FaBasketballBall, FaGift } from "react-icons/fa";
import { MdCasino } from "react-icons/md";
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
          { name: "Casino A", href: "/casino/game/casino-a" },
          { name: "Casino B", href: "/casino/game/casino-b" },
          { name: "Casino C", href: "/casino/game/casino-c" },
          { name: "Casino D", href: "/casino/game/casino-d" },
        ],
      },
      {
        name: "sports",
        type: "dropdown",
        icon: FaBasketballBall({ size: 20 }),
        label: "Sports",
        items: [
          { name: "Sports A", href: "/sports/game/sports-a" },
          { name: "Sports B", href: "/sports/game/sports-b" },
        ],
      },
      {
        name: "cockfight",
        type: "dropdown",
        icon: GiChicken({ size: 20 }),
        label: "Cockfight",
        items: [
          { name: "Cockfight A", href: "/casino/game/cockfight-a" },
          { name: "Cockfight B", href: "/casino/game/cockfight-b" },
        ],
      },
      {
        name: "lottery",
        type: "dropdown",
        icon: GoGoal({ size: 20 }),
        label: "Lottery",
        items: [
          { name: "Lottery A", href: "/casino/game/lottery-a" },
          { name: "Lottery B", href: "/casino/game/lottery-b" },
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
        href: "/promotions",
      },
      {
        name: "rewards",
        type: "link",
        icon: GiReceiveMoney({ size: 20 }),
        label: "Rewards",
        href: "/rewards",
      },
      {
        name: "affiliate",
        type: "link",
        icon: TbAffiliateFilled({ size: 20 }),
        label: "Affiliate",
        href: "/affiliate",
      },
      {
        name: "vip",
        type: "link",
        icon: RiVipCrown2Fill({ size: 20 }),
        label: "VIP Club",
        href: "/vip",
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
          { name: "Sponsorships A", href: "/sponsorships-a" },
          { name: "Sponsorships B", href: "/sponsorships-b" },
        ],
      },
      {
        name: "liveSupport",
        type: "link",
        icon: BiSupport({ size: 20 }),
        label: "Live Support",
        href: "/support",
      },
    ],
  },
];
