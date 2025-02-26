import { FaBahtSign, FaDollarSign } from "react-icons/fa6";
import { SiBitcoin, SiEthereum, SiLitecoin, SiTether } from "react-icons/si";

export const cryptoCurrencies = [
  {
    Icon: SiTether,
    name: "USDT",
    fullName: "USD Tether",
    color: "#558676",
    blockchains: [
      { name: "TRC20", networkName: "TRX", fullName: "Tron" },
      { name: "BEP20", networkName: "BSC", fullName: "BNB Smart Chain" },
      { name: "ERC20", networkName: "ETH", fullName: "Ethereum" },
    ],
  },
  {
    Icon: SiBitcoin,
    name: "BTC",
    fullName: "Bitcoin",
    color: "#F7931A",
    blockchains: [],
  },
  {
    Icon: SiEthereum,
    name: "ETH",
    fullName: "Ethereum",
    color: "#3C3C3D",
    blockchains: [
      { name: "BEP20", networkName: "BSC", fullName: "BNB Smart Chain" },
      { name: "ERC20", networkName: "ETH", fullName: "Ethereum" },
    ],
  },
  {
    Icon: SiLitecoin,
    name: "LTC",
    fullName: "Litecoin",
    color: "#B0B0B0",
    blockchains: [],
  },
];

export const currencies = [
  {
    Icon: FaDollarSign,
    name: "USD",
    fullName: "United States Dollar",
  },
  {
    Icon: FaBahtSign,
    name: "THB",
    fullName: "Thai Baht",
  },
];
