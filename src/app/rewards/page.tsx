import HeroBanner from "@/components/Layout/HeroBanner";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Exciting Casino Rewards & Bonuses - FaFa878",
  description:
    "Unlock exclusive rewards and bonuses at FaFa878. Join our loyalty program to earn free spins, cashback, and VIP perks. Experience the best online casino incentives today!",
};

const RewardsPage = () => {
  return (
    <div>
      <HeroBanner title="Rewards" />
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
                  Promotions
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
                  Lucky Wheel
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
                  VIP
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
                  Promotion Code
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
