import { useMemo } from "react";
import { useTransactionStore } from "@/store/transactionStore";

const useTransactionSummary = () => {
  const transactions = useTransactionStore((state) => state.transactions);

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, t) => {
        const amount = Number(t.amount);

        if (t.type === "income") {
          acc.income += amount;
        } else {
          acc.expenses += amount;
        }
        acc.balance = acc.income - acc.expenses;

        return acc;
      },
      { income: 0, expenses: 0, balance: 0 }
    );
  }, [transactions]);

  return summary;
};

export default useTransactionSummary;
