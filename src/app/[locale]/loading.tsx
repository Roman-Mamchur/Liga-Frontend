import { useTranslations } from "next-intl";
import { GiPokerHand } from "react-icons/gi";

export default function LoadingPage() {
  const t = useTranslations("LoadingPage");

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex animate-pulse flex-col items-center justify-center gap-4 text-primary">
        <GiPokerHand className="size-12" />
        <div className="flex font-medium">
          <span>{t("message")}</span>
        </div>
      </div>
    </div>
  );
}
