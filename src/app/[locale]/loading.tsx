import { useTranslations } from "next-intl";
import { GiPokerHand } from "react-icons/gi";

export default function LoadingPage() {
  const t = useTranslations("LoadingPage");

  return (
    <div className="container -my-14 flex h-screen w-full flex-col items-center justify-center text-center md:my-0">
      <div className="flex animate-pulse flex-col items-center justify-center gap-4 text-primary">
        <GiPokerHand className="size-12" />
        <div className="flex font-medium">
          <span>{t("message")}</span>
        </div>
      </div>
    </div>
  );
}
