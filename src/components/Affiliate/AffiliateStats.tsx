import Image from "next/image";

const AffiliateStats = () => {
  return (
    <div className="flex rounded-lg shadow-md">
      <div className="flex flex-1 flex-col gap-3 rounded-lg bg-card p-4 md:rounded-r-none">
        <h3 className="text-2xl font-bold opacity-80">
          Refer and earn big with our Affiliate Program
        </h3>
        <p className="text-sm opacity-80">
          Earn commission for all bets placed by your referrals across Casino
          and Sportsbook.
        </p>
        <div className="w-fit rounded bg-primary px-4 py-2 text-white">
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <p className="text-lg font-bold">21.6M</p>
              <p className="text-sm">Worldwide Customers</p>
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-bold">32</p>
              <p className="text-sm">Payment Methods</p>
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-bold">16</p>
              <p className="text-sm">Languages Supported</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Image
          src="/affiliate/referral.webp"
          alt="Affiliate Overview"
          height={0}
          width={0}
          sizes="100vw"
          priority={true}
          className="h-full w-40 rounded-r-lg object-cover"
        />
      </div>
    </div>
  );
};

export default AffiliateStats;
