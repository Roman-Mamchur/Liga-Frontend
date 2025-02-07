import { ReactNode } from "react";

interface WalletCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  currency: ReactNode;
}

const WalletCard = ({
  icon,
  title,
  description,
  currency,
}: WalletCardProps) => {
  return (
    <div className="flex h-full items-center justify-between gap-6 rounded bg-card px-6 py-4 shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded bg-primary p-2 text-white shadow-md">
        {icon}
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="flex items-center gap-1">
          <span className="text-sm">{description}</span>
          <span className="size-4">{currency}</span>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
