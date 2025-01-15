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
                items: ["Casino A", "Casino B", "Casino C", "Casino D"],
            },
            {
                name: "sports",
                type: "dropdown",
                icon: FaBasketballBall({ size: 20 }),
                label: "Sports",
                items: ["Sports A", "Sports B"],
            },
            {
                name: "cockfight",
                type: "dropdown",
                icon: GiChicken({ size: 20 }),
                label: "Cockfight",
                items: ["Cockfight A", "Cockfight B"],
            },
            {
                name: "lottery",
                type: "dropdown",
                icon: GoGoal({ size: 20 }),
                label: "Lottery",
                items: ["Lottery A", "Lottery B"],
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
                items: [],
            },
            {
                name: "rewards",
                type: "link",
                icon: GiReceiveMoney({ size: 20 }),
                label: "Rewards",
                items: [],
            },
            {
                name: "affiliate",
                type: "link",
                icon: TbAffiliateFilled({ size: 20 }),
                label: "Affiliate",
                items: [],
            },
            {
                name: "vip",
                type: "link",
                icon: RiVipCrown2Fill({ size: 20 }),
                label: "VIP Club",
                items: [],
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
                items: ["Sponsorships A", "Sponsorships B"],
            },
            {
                name: "liveSupport",
                type: "link",
                icon: BiSupport({ size: 20 }),
                label: "Live Support",
                items: [],
            },
            {
                name: "language",
                type: "radio",
                icon: MdLanguage({ size: 20 }),
                items: ["English", "Español"],
            },
        ],
    },
];
