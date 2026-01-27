import { create } from "zustand";
import type { Transaction } from "./transactionStore";

type ModalType = "confirmDelete" | null;

type ModalState = {
  modalType: ModalType;
  payload?: Transaction;
  openModal: (type: ModalType, payload?: Transaction) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  modalType: null,
  payload: undefined,
  openModal: (type, payload) =>
    set({
      modalType: type,
      payload,
    }),
  closeModal: () =>
    set({
      modalType: null,
      payload: undefined,
    }),
}));
