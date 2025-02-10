import { FaChevronRight, FaGift } from "react-icons/fa6";
import GiftIcon from "./GiftIcon";
import Link from "next/link";

const ProfilePromotions = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3 text-xl font-bold opacity-80">
        <FaGift />
        <h2>My Promotions</h2>
      </div>
      <Link
        href="/profile/cashback"
        className="cursor-pointer duration-200 hover:scale-105"
      >
        <div className="flex items-center gap-3 rounded bg-card px-6 py-3 shadow-md">
          <GiftIcon className="size-12 text-primary" />
          <p className="flex-1 text-sm font-semibold">Cashback</p>
          <FaChevronRight />
        </div>
      </Link>
      <Link
        href="/profile/rebate"
        className="cursor-pointer duration-200 hover:scale-105"
      >
        <div className="flex items-center gap-3 rounded bg-card px-6 py-4 shadow-md">
          <GiftIcon className="size-12 text-primary" />
          <p className="flex-1 text-sm font-semibold">Rebate</p>
          <FaChevronRight />
        </div>
      </Link>
    </div>
  );
};

export default ProfilePromotions;
