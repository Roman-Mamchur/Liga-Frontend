import { RootState } from "@/store";
import DepositSection from "./DepositSection";
import { useSelector } from "react-redux";
import WithdrawSection from "./WithdrawSection";

const WalletContentSection = () => {
  const activeWalletGroup = useSelector(
    (state: RootState) => state.category.activeWalletGroup,
  );

  return (
    <div>
      {activeWalletGroup === "Deposit" && <DepositSection />}

      {activeWalletGroup === "Withdraw" && <WithdrawSection />}
    </div>
  );
};

export default WalletContentSection;
