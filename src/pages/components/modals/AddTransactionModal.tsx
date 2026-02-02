import { Dialog } from "@mui/material";
import AddTransactionCard from "../AddTransactionCard";
import { type Transaction } from "@/store/transactionStore";

type AddTransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
  transactionToEdit?: Transaction;
};

const AddTransactionModal = ({
  isOpen,
  onClose,
  defaultCategory,
  transactionToEdit,
}: AddTransactionModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <AddTransactionCard
        defaultCategory={defaultCategory}
        onClose={onClose}
        transactionToEdit={transactionToEdit}
      />
    </Dialog>
  );
};

export default AddTransactionModal;
