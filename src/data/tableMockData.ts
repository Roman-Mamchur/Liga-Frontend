const getRandomDate = () => {
  const start = new Date(2020, 0, 1);
  const end = new Date();
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomStatus = () => {
  const statuses = ["Completed", "Processing", "Declined"];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

export const referralsMockData = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  username: `User ${index + 1}`,
  registered: getRandomDate(),
  totalDeposits: getRandomNumber(500, 5000),
  lastDeposit: getRandomNumber(100, 1000),
  wagered: getRandomNumber(5000, 10000),
  commission: getRandomNumber(50, 500),
}));

export const historyMockData = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  amount: getRandomNumber(50, 500),
  channel: `Channel ${index + 1}`,
  bankAccount: getRandomNumber(500, 5000),
  depositDate: getRandomDate(),
  status: getRandomStatus(),
  statusDate: getRandomDate(),
}));

export const rebateAndCashbackMockData = Array.from(
  { length: 6 },
  (_, index) => ({
    id: index + 1,
    amount: getRandomNumber(50, 500),
    transactionDate: getRandomDate(),
  }),
);

export const totalBetsMockData = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  bet: getRandomNumber(50, 500),
  winLose: getRandomNumber(-100, 100),
  transactionDate: getRandomDate(),
}));
