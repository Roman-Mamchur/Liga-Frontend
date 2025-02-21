import ReferralLink from "@/components/Affiliate/ReferralLink";
import { useTranslations } from "next-intl";
import { FaChevronDown } from "react-icons/fa6";
import { SiBitcoin } from "react-icons/si";

const AffiliateCampaignsPage = () => {
  const linkT = useTranslations("AffiliatePage.ReferralLink");

  return (
    <>
      <div className="mb-6 flex flex-wrap items-start justify-center gap-6 text-sm md:justify-start">
        <div className="flex flex-col items-center justify-start">
          <p className="font-medium">Campaign Hits</p>
          <p className="opacity-60">0</p>
        </div>
        <div className="flex flex-col items-center justify-start">
          <p className="font-medium">Referrals</p>
          <p className="opacity-60">0</p>
        </div>
        <div className="flex flex-col items-center justify-start">
          <p className="font-medium">Total Deposits</p>
          <p className="opacity-60">0</p>
        </div>
        <div className="flex flex-col items-center justify-start">
          <p className="font-medium">Unique Deposits</p>
          <p className="opacity-60">0</p>
        </div>
        <div className="flex flex-col items-center justify-start">
          <p className="font-medium">Available</p>
          <div className="flex items-center justify-center gap-1">
            <span className="overflow-hidden text-ellipsis whitespace-nowrap opacity-60">
              0.00000000
            </span>
            <SiBitcoin className="text-[#F7931A]" />
          </div>
        </div>
      </div>

      <div className="rounded bg-card">
        <div className="border-b-2 border-black/10">
          <div className="flex items-center justify-between gap-6 px-6 py-3 text-sm">
            <p className="flex-1 opacity-80">John Doe</p>
            <div className="flex cursor-pointer items-center justify-center gap-3 rounded p-2 duration-200 hover:bg-black/10">
              <div className="flex items-center justify-center gap-1">
                <span className="overflow-hidden text-ellipsis whitespace-nowrap opacity-80">
                  Commission: 0.00000000
                </span>
                <SiBitcoin className="text-[#F7931A]" />
              </div>
              <div>
                <FaChevronDown />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="px-6 py-3 text-sm">
            <div className="flex flex-wrap justify-start gap-6 text-center text-sm">
              <div className="flex flex-col items-center justify-center">
                <p className="font-medium">Campaign Hits</p>
                <p className="opacity-60">0</p>
              </div>
              <div className="flex flex-col items-center justify-start">
                <p className="font-medium">Referrals</p>
                <p className="opacity-60">0</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-medium">Total Deposits</p>
                <p className="opacity-60">0</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-medium">Available Commission</p>
                <p className="opacity-60">0</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-medium">Total Commission</p>
                <p className="opacity-60">0</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-medium">Unique Deposits</p>
                <p className="opacity-60">0</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-medium">Commission Rate</p>
                <p className="opacity-60">0.10</p>
              </div>
            </div>
            <div className="mt-6 md:w-1/2">
              <ReferralLink type={2} desc={linkT("link")} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm">
        <button className="rounded bg-primary px-6 py-3 font-semibold text-white duration-200 hover:scale-105 hover:bg-secondary">
          Create new campaign
        </button>
      </div>
    </>
  );
};

export default AffiliateCampaignsPage;
