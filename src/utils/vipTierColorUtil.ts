export const getTextColorClass = (tier: string) => {
  const colors: Record<string, string> = {
    bronze: "text-bronze",
    silver: "text-silver",
    gold: "text-gold",
    platinum: "text-platinum",
    black: "text-dark",
  };

  return colors[tier.toLowerCase()] || "text-white";
};

export const getBgColorClass = (tier: string) => {
  const colors: Record<string, string> = {
    bronze: "bg-bronze text-foreground",
    silver: "bg-silver text-foreground",
    gold: "bg-gold text-foreground",
    platinum: "bg-platinum text-foreground",
    black: "bg-dark text-white",
  };

  return colors[tier.toLowerCase()] || "bg-transparent";
};
