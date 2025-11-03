import { useTransactionStore } from "../store/useTransactionStore";

const Balance = () => {

  const { transactions } = useTransactionStore();
  const totalBalance = transactions.reduce((sum, t) => sum + t.amount, 0);

  return (
    <>
      <div>Balance</div>
      <div>{totalBalance}</div>
    </>
  );
};

export default Balance;
