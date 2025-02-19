"use client";

import { Link, usePathname } from "@/i18n/routing";

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
                  ? "border-primary bg-accentOpacity"
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
