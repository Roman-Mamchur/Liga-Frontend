import HeroBanner from "@/components/HeroBanner";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Exclusive Casino Promotions & Offers - FaFa878",
  description:
    "Discover unbeatable online casino promotions at FaFa878. Enjoy daily bonuses, free spins, cashback deals, and limited-time offers. Don't miss out—boost your winnings today!",
};

const RewardsPage = () => {
  return (
    <div>
      <HeroBanner title="Promotions" />
      <div className="container">
        <div className="my-8 flex flex-col gap-6">
          <div className="flex flex-col gap-3 font-bold md:flex-row">
            {/* Link 1 */}
            <Link href="/" className="flex-1">
              <div className="flex h-24 items-center justify-center rounded-md shadow-md duration-200 hover:-translate-y-1">
                <div className="h-24 w-24">
                  <Image
                    src={"/link/casino.avif"}
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
                    Casino
                    <span>
                      <FaChevronRight />
                    </span>
                  </p>
                </div>
              </div>
            </Link>
            {/* Link 2 */}
            <Link href="/sports" className="flex-1">
              <div className="flex h-24 items-center justify-center rounded-md shadow-md duration-200 hover:-translate-y-1">
                <div className="h-24 w-24">
                  <Image
                    src={"/link/sport.avif"}
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
                    Sports
                    <span>
                      <FaChevronRight />
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <h3 className="text-lg font-bold opacity-80">Latest Promotions</h3>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {/* Example Card */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h- mx-auto h-[240px] w-[315px] rounded-lg bg-card shadow-md"
              >
                <div className="flex flex-col gap-2 p-2">
                  <div className="h-[160px]">
                    <Image
                      src={"/banner/image1.png"}
                      alt="Promo image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      priority={true}
                      className="h-full w-full rounded object-cover"
                    />
                  </div>
                  <div className="text-xs opacity-80">
                    Ends at 6:00 PM 12/31/2025
                  </div>
                  <div className="text-lg">Promotion A</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;
