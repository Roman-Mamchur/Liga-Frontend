import HeroBanner from "@/components/Layout/HeroBanner";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { FaChevronRight } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;

  const t = await getTranslations({
    locale: resolvedParams.locale,
    namespace: "Metadata.RewardsPage",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const RewardsPage = () => {
  const t = useTranslations("RewardsPage");

  return (
    <div>
      <HeroBanner title={t("hero")} />
      <div className="container">
        <div className="my-8 flex flex-col gap-3 font-bold">
          {/* Link 1 */}
          <Link href="/promotions">
            <div className="flex h-24 items-center justify-center rounded-md shadow-md duration-200 hover:-translate-y-1">
              <div className="h-24 w-24">
                <Image
                  src={"/rewards/1.png"}
                  alt="Banner image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority={true}
                  className="h-full w-auto rounded-l"
                />
              </div>
              <div className="flex h-full flex-1 items-center rounded-r bg-card">
                <p className="flex w-full items-center justify-between px-3 opacity-80">
                  {t("promotions")}
                  <span>
                    <FaChevronRight />
                  </span>
                </p>
              </div>
            </div>
          </Link>

          {/* Link 2 */}
          <Link href="/lucky-wheel">
            <div className="flex h-24 items-center justify-center rounded-md shadow-md duration-200 hover:-translate-y-1">
              <div className="h-24 w-24">
                <Image
                  src={"/rewards/2.png"}
                  alt="Banner image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority={true}
                  className="h-full w-auto rounded-l"
                />
              </div>
              <div className="flex h-full flex-1 items-center rounded-r bg-card">
                <p className="flex w-full items-center justify-between px-3 opacity-80">
                  {t("luckyWheel")}
                  <span>
                    <FaChevronRight />
                  </span>
                </p>
              </div>
            </div>
          </Link>

          {/* Link 3 */}
          <Link href="/affiliate">
            <div className="flex h-24 items-center justify-center rounded-md shadow-md duration-200 hover:-translate-y-1">
              <div className="h-24 w-24">
                <Image
                  src={"/rewards/3.png"}
                  alt="Banner image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority={true}
                  className="h-full w-auto rounded-l"
                />
              </div>
              <div className="flex h-full flex-1 items-center rounded-r bg-card">
                <p className="flex w-full items-center justify-between px-3 opacity-80">
                  {t("vip")}
                  <span>
                    <FaChevronRight />
                  </span>
                </p>
              </div>
            </div>
          </Link>

          {/* Link 4 */}
          <Link href="/promotion-code">
            <div className="flex h-24 items-center justify-center rounded-md shadow-md duration-200 hover:-translate-y-1">
              <div className="h-24 w-24">
                <Image
                  src={"/rewards/4.png"}
                  alt="Banner image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority={true}
                  className="h-full w-auto rounded-l"
                />
              </div>
              <div className="flex h-full flex-1 items-center rounded-r bg-card">
                <p className="flex w-full items-center justify-between px-3 opacity-80">
                  {t("promotionCode")}
                  <span>
                    <FaChevronRight />
                  </span>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;
