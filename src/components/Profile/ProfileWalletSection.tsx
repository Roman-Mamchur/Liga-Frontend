import {
  FaCreditCard,
  FaMoneyBillWave,
  FaUsers,
  FaWallet,
} from "react-icons/fa6";
import WalletCard from "../Card/WalletCard";
import { SiBitcoin } from "react-icons/si";
import { useTranslations } from "next-intl";

const ProfileWalletSection = () => {
  const t = useTranslations("ProfilePage.Overview.Wallet");

  const BTC = <SiBitcoin className="rounded-full bg-white text-[#F7931A]" />;

  const WALLETS = [
    {
      icon: <FaWallet size={40} />,
      title: t("yourWallet"),
      description: "0.00000000",
      currency: BTC,
    },
    {
      icon: <FaCreditCard size={40} />,
      title: t("rebateBalance"),
      description: "0.00000000",
      currency: BTC,
    },
    {
      icon: <FaMoneyBillWave size={40} />,
      title: t("cashbackBalance"),
      description: "0.00000000",
      currency: BTC,
    },
    {
      icon: <FaUsers size={40} />,
      title: t("referralBalance"),
      description: "0.00000000",
      currency: BTC,
    },
  ];

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center gap-3 text-xl font-bold opacity-80">
        <FaWallet />
        <h2>{t("label")}</h2>
      </div>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {WALLETS.map((wallet, index) => (
          <WalletCard
            key={index}
            icon={wallet.icon}
            title={wallet.title}
            description={wallet.description}
            currency={wallet.currency}
          />
        ))}
      </div>
    </section>
  );
};

export default ProfileWalletSection;
