import { create } from 'zustand';
import type { Transaction } from '../types/transaction';

type TransactionState = {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
};

export const useTransactionStore = create<TransactionState>((set) => ({
  transactions: [],
  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [...state.transactions, transaction],
    })),
}));
