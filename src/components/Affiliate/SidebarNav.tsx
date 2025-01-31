"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarNav = () => {
  const pathname = usePathname();
  const navItems = [
    { name: "Overview", path: "/affiliate" },
    { name: "Campaigns", path: "/affiliate/campaigns" },
    { name: "Funds", path: "/affiliate/funds" },
    { name: "Referred Users", path: "/affiliate/referred-users" },
    { name: "FAQ", path: "/affiliate/faq" },
  ];

  return (
    <div className="h-fit w-full flex-grow-0 rounded bg-card py-2 shadow-md md:w-fit">
      <ul className="font-bold">
        {navItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <li
              className={`border-l-[3px] px-4 py-2 duration-200 ${
                pathname === item.path
                  ? "border-primary bg-orange-500/20"
                  : "border-transparent hover:bg-black/10"
              }`}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SidebarNav;
