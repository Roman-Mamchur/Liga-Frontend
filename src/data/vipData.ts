export const tiers = ["Bronze", "Silver", "Gold", "Platinum", "Black"];

export const vipCardInfo = [
  {
    amount: "$30k",
    benefits: [
      "Upgrade Bonus: 128",
      "Daily Withdraw Limit: 5",
      "Birthday Bonus: 188",
      "Weekly Rescue Bonus: 888",
      "Referral Friend Bonus: Available",
      "Festival Cash: 50",
      "Special Birthday Gift: Yes",
    ],
  },
  {
    amount: "$50k",
    benefits: [
      "Upgrade Bonus: 288",
      "Daily Withdraw Limit: 10",
      "Birthday Bonus: 388",
      "Weekly Rescue Bonus: 1,888",
      "Referral Friend Bonus: Available",
      "Festival Cash: 75",
      "Special Birthday Gift: Yes",
    ],
  },
  {
    amount: "$150k",
    benefits: [
      "Upgrade Bonus: 688",
      "Daily Withdraw Limit: 20",
      "Birthday Bonus: 588",
      "Weekly Rescue Bonus: 2,888",
      "Referral Friend Bonus: Available",
      "Festival Cash: 100",
      "Special Birthday Gift: Yes",
    ],
  },
  {
    amount: "Unlimited",
    benefits: [
      "Upgrade Bonus: 1,288",
      "Daily Withdraw Limit: Unlimited",
      "Birthday Bonus: 888",
      "Weekly Rescue Bonus: 3,888",
      "Referral Friend Bonus: Available",
      "Festival Cash: 300",
      "Special Birthday Gift: Yes",
    ],
  },
  {
    amount: "Unlimited",
    benefits: [
      "Upgrade Bonus: 1,888",
      "Daily Withdraw Limit: Unlimited",
      "Birthday Bonus: 2,888",
      "Weekly Rescue Bonus: 6,888",
      "Referral Friend Bonus: Available",
      "Festival Cash: 500",
      "Special Birthday Gift: Yes",
    ],
  },
];

export const vipBenefitsInfo = {
  title: "VIP Benefits",
  data: [
    { name: "Upgrade Bonus", values: ["128", "288", "688", "1,288", "1,888"] },
    {
      name: "Daily Withdraw Amount",
      values: ["30,000", "50,000", "150,000", "Unlimited", "Unlimited"],
    },
    {
      name: "Daily Withdraw Limit",
      values: ["5", "10", "20", "Unlimited", "Unlimited"],
    },
    { name: "Birthday Bonus", values: ["188", "388", "588", "888", "2,888"] },
    {
      name: "Weekly Rescue Bonus",
      values: ["888", "1,888", "2,888", "3,888", "6,888"],
    },
    { name: "Referral Friend", values: ["Yes", "Yes", "Yes", "Yes", "Yes"] },
    { name: "Festival Cash", values: ["50", "75", "100", "300", "500"] },
    {
      name: "Special Birthday Gift",
      values: ["Yes", "Yes", "Yes", "Yes", "Yes"],
    },
  ],
};

export const vipRebatesInfo = {
  title: "Daily Cash Rebate",
  data: [
    { name: "Esports", values: ["0.50%", "0.60%", "0.70%", "0.80%", "1%"] },
    { name: "Live Casino", values: ["0.40%", "0.50%", "0.65%", "0.80%", "1%"] },
    { name: "Slot", values: ["0.50%", "0.60%", "0.70%", "0.85%", "1%"] },
    { name: "Sportsbook", values: ["0.50%", "0.60%", "0.70%", "0.80%", "1%"] },
  ],
};

export const vipLevelUpRequirementsInfo = {
  title: "Level Up Requirements",
  data: [
    {
      name: "Accumulated Deposit (Monthly)",
      values: ["30,000", "100,000", "200,000", "500,000", "By Invitation"],
    },
  ],
};

export const vipRetentionRequirementsInfo = {
  title: "Monthly Tier Retention Requirements",
  data: [
    {
      name: "Membership Renewal",
      values: ["2 Months", "2 Months", "Lifetime", "Lifetime", "Lifetime"],
    },
  ],
};
