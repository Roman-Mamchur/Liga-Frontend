import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 flex h-14 w-full justify-center bg-white shadow-md">
      <div className="container flex items-center justify-between align-middle">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: 40 }}
          />
        </Link>
        <div className="flex items-center space-x-4 text-xs font-bold md:text-sm">
          <button className="rounded-md border-2 border-foreground p-2 transition-transform duration-200 hover:scale-105 md:px-6 md:py-2">
            Sign in
          </button>
          <button className="rounded-md border-2 border-primary bg-primary p-2 text-white transition-transform duration-200 hover:scale-105 md:px-6 md:py-2">
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
