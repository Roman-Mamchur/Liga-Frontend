import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { GiPokerHand } from "react-icons/gi";
import { MdSportsBasketball } from "react-icons/md";

interface MainLinksProps {
  isExpanded: boolean;
}

const MainLinks = ({ isExpanded }: MainLinksProps) => {
  const t = useTranslations("Sidebar");
  const [showTextButtons, setShowTextButtons] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isExpanded) {
      timeoutId = setTimeout(() => {
        setShowTextButtons(true);
      }, 100);
    } else {
      setShowTextButtons(false);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isExpanded]);

  return (
    <>
      {isExpanded ? (
        <div className="mx-auto flex gap-3 text-nowrap">
          <Link
            href="/"
            className={`rounded border border-stroke bg-primary px-3 py-1 font-semibold transition duration-200 ease-in hover:bg-white/20 ${
              showTextButtons ? "opacity-100" : "opacity-0"
            }`}
          >
            {t("casinoButton")}
          </Link>
          <Link
            href="/sports"
            className={`rounded border border-stroke bg-primary px-3 py-1 font-semibold transition duration-200 ease-in hover:bg-white/20 ${
              showTextButtons ? "opacity-100" : "opacity-0"
            }`}
          >
            {t("sportsButton")}
          </Link>
        </div>
      ) : (
        <>
          <Link
            href="/"
            className="rounded border border-stroke bg-primary p-1 font-semibold transition duration-200 ease-in hover:bg-white/20"
          >
            <GiPokerHand size={30} />
          </Link>
          <Link
            href="/sports"
            className="rounded border border-stroke bg-primary p-1 font-semibold transition duration-200 ease-in hover:bg-white/20"
          >
            <MdSportsBasketball size={30} />
          </Link>
        </>
      )}
    </>
  );
};

export default MainLinks;
