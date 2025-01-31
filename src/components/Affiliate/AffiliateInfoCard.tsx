import { ReactNode } from "react";

interface AffiliateInfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const AffiliateInfoCard = ({
  icon,
  title,
  description,
}: AffiliateInfoCardProps) => {
  return (
    <div className="flex h-fit items-center justify-between gap-6 rounded bg-card px-6 py-4 shadow-md">
      <div className="h-full rounded bg-primary p-2 text-white shadow-md">
        {icon}
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm opacity-60">{description}</p>
      </div>
    </div>
  );
};

export default AffiliateInfoCard;
