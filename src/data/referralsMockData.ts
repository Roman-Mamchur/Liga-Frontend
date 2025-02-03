const getRandomDate = () => {
  const start = new Date(2020, 0, 1);
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
};

const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const referralsMockData = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  username: `User ${index + 1}`,
  registered: getRandomDate().toLocaleDateString(),
  totalDeposits: getRandomNumber(500, 5000),
  lastDeposit: getRandomNumber(100, 1000),
  wagered: getRandomNumber(5000, 10000),
  commission: getRandomNumber(50, 500),
}));
