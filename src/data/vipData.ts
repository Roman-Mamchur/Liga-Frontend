export const tiers = ["bronze", "silver", "gold", "platinum", "black"];

export const vipCardInfo = tiers.map((tier) => ({
  tier,
  amount: `Benefits.Details.${tier}.amount`,
  benefits: [
    "upgradeBonus",
    "dailyWithdrawLimit",
    "birthdayBonus",
    "weeklyRescueBonus",
    "referralFriendBonus",
    "festivalCash",
    "specialBirthdayGift",
  ].map((benefit) => ({
    key: benefit,
    value: `Benefits.Details.${tier}.${benefit}`,
  })),
}));

export const vipTables = [
  {
    key: "vipBenefits",
    title: "VipPage.Tables.vipBenefits.label",
    dataKeys: [
      "upgradeBonus",
      "dailyWithdrawAmount",
      "dailyWithdrawLimit",
      "birthdayBonus",
      "weeklyRescueBonus",
      "referralFriendBonus",
      "festivalCash",
      "specialBirthdayGift",
    ],
  },
  {
    key: "vipRebates",
    title: "VipPage.Tables.vipRebates.label",
    dataKeys: ["esports", "liveCasino", "slot", "sportsbook"],
  },
  {
    key: "vipLevelUpRequirements",
    title: "VipPage.Tables.vipLevelUpRequirements.label",
    dataKeys: ["accumulatedDeposit"],
  },
  {
    key: "vipRetentionRequirements",
    title: "VipPage.Tables.vipRetentionRequirements.label",
    dataKeys: ["membershipRenewal"],
  },
];
