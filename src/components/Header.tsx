import Image from "next/image";
import Link from "next/link";
import {
  FaBell,
  FaBitcoin,
  FaChevronDown,
  FaUser,
  FaWallet,
} from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const mockLogin = true;

  return (
    <header className="sticky top-0 flex h-14 w-full justify-center bg-white shadow-md">
      <div className="container flex items-center justify-between gap-5 align-middle">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            priority={true}
            className="h-auto w-32 cursor-pointer"
          />
        </Link>
        {mockLogin ? (
          <>
            <div className="hidden w-fit text-sm font-semibold md:flex">
              <div className="bg-card flex flex-1 cursor-pointer items-center justify-between gap-5 rounded-l p-2.5 duration-200 hover:bg-black/20">
                <span>0.00000000</span>
                <span className="flex gap-2">
                  <FaBitcoin className="text-primary" />
                  <FaChevronDown />
                </span>
              </div>
              <div className="flex cursor-pointer items-center justify-center rounded-r bg-primary p-2.5 text-white duration-200 hover:bg-secondary">
                <span className="hidden md:block">Wallet</span>
                <span className="md:hidden">
                  <FaWallet />
                </span>
              </div>
            </div>
            <div className="flex items-center justify-end gap-1 text-sm font-semibold opacity-80">
              <span className="hover:bg-card hidden cursor-pointer items-center gap-2 rounded-full p-3 duration-200 md:flex">
                <FaSearch /> Search
              </span>
              <span className="hover:bg-card cursor-pointer rounded-full p-3 duration-200">
                <FaUser />
              </span>
              <span className="hover:bg-card cursor-pointer rounded-full p-3 duration-200">
                <FaBell />
              </span>
            </div>
          </>
        ) : (
          <div className="flex items-center space-x-4 text-xs font-bold md:text-sm">
            <button className="rounded-md border-2 border-foreground p-2 transition-transform duration-200 hover:scale-105 md:px-6 md:py-2">
              Sign in
            </button>
            <button className="rounded-md border-2 border-primary bg-primary p-2 text-white transition-transform duration-200 hover:scale-105 md:px-6 md:py-2">
              Register
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
