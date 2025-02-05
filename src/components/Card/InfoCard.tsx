import { ReactNode } from "react";

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const InfoCard = ({ icon, title, description }: InfoCardProps) => {
  return (
    <div className="flex h-full items-center justify-between gap-6 rounded bg-card px-6 py-4 shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded bg-primary text-white shadow-md">
        {icon}
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm opacity-60">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
