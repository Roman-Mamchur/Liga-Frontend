"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarNavProps {
  navItems: Array<{ name: string; path: string }>;
}

const SidebarNav = ({ navItems }: SidebarNavProps) => {
  const pathname = usePathname();

  return (
    <div className="h-fit w-full flex-grow-0 rounded bg-card py-2 shadow-md md:w-fit">
      <ul className="font-bold">
        {navItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <li
              className={`border-l-[3px] px-4 py-2 duration-200 ${
                pathname === item.path
                  ? "bg-accentOpacity border-primary"
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
