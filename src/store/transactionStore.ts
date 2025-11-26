import { create } from "zustand";

export type Transaction = {
  id: string;
  amount: string;
  description: string;
  category: string;
};

type TransactionState = {
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, "id">) => void;
  removeTransaction: (transaction: Transaction) => void;
};

export const useTransactionStore = create<TransactionState>((set) => ({
  transactions: [],
  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [
        ...state.transactions,
        { ...transaction, id: crypto.randomUUID() },
      ],
    })),
  removeTransaction: (transaction: Transaction) =>
    set((state) => ({
      transactions: state.transactions.filter((t) => t.id !== transaction.id),
    })),
}));
