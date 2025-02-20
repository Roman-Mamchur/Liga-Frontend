import { FaChevronRight, FaGift } from "react-icons/fa6";
import GiftIcon from "./GiftIcon";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const ProfilePromotions = () => {
  const t = useTranslations("ProfilePage.Overview.Promotions");

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3 text-xl font-bold opacity-80">
        <FaGift />
        <h2>{t("label")}</h2>
      </div>
      <Link
        href="/profile/cashback"
        className="cursor-pointer duration-200 hover:scale-105"
      >
        <div className="flex items-center gap-3 rounded bg-card px-6 py-3 shadow-md">
          <span className="shrink-0">
            <GiftIcon className="size-12 text-primary" />
          </span>
          <p className="flex-1 truncate text-sm font-semibold">
            {t("cashback")}
          </p>
          <span className="shrink-0">
            <FaChevronRight />
          </span>
        </div>
      </Link>
      <Link
        href="/profile/rebate"
        className="cursor-pointer duration-200 hover:scale-105"
      >
        <div className="flex items-center gap-3 rounded bg-card px-6 py-4 shadow-md">
          <span className="shrink-0">
            <GiftIcon className="size-12 text-primary" />
          </span>
          <p className="flex-1 truncate text-sm font-semibold">{t("rebate")}</p>
          <span className="shrink-0">
            <FaChevronRight />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProfilePromotions;
