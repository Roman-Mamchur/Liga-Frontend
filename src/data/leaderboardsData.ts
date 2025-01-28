interface Leaderboard {
  set: string;
  data: Array<{
    game?: string;
    user: string;
    time?: string;
    bet?: string;
    multiplier?: string;
    payout?: string;
    rank?: number;
    wagered?: string;
    prize?: string;
  }>;
}

// Mock Data
export const leaderboardData: Leaderboard[] = [
  {
    set: "My Games",
    data: [],
  },
  {
    set: "All Games",
    data: Array.from({ length: 40 }, (_, i) => ({
      game: `Game ${i + 1}`,
      user: `User ${String.fromCharCode(65 + (i % 26))}`,
      time: `${i + 1}:00 PM`,
      bet: `${(Math.random() * 500).toFixed(2)}`,
      multiplier: (Math.random() * 10).toFixed(2),
      payout: `${(Math.random() * 2000).toFixed(2)}`,
    })),
  },
  {
    set: "High Rollers",
    data: Array.from({ length: 40 }, (_, i) => ({
      game: `High Game ${i + 1}`,
      user: `HighRoller ${String.fromCharCode(65 + (i % 26))}`,
      time: `${i + 1}:30 PM`,
      bet: `${(500 + Math.random() * 1000).toFixed(2)}`,
      multiplier: (2 + Math.random() * 5).toFixed(2),
      payout: `${(3000 + Math.random() * 5000).toFixed(2)}`,
    })),
  },
  {
    set: "Race Leaderboard",
    data: Array.from({ length: 40 }, (_, i) => ({
      rank: i + 1,
      user: `Player ${String.fromCharCode(65 + (i % 26))}`,
      wagered: `${(1000 + Math.random() * 5000).toFixed(2)}`,
      prize: `${(500 + Math.random() * 2000).toFixed(2)}`,
    })),
  },
];
