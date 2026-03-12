import { Dialog } from "@mui/material";
import AddTransactionCard from "../AddTransactionCard";

type AddTransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory: string;
  transactionType: "income" | "expense" | "";
};

const AddTransactionModal = ({
  isOpen,
  onClose,
  defaultCategory,
  transactionType,
}: AddTransactionModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <AddTransactionCard
        defaultCategory={defaultCategory}
        transactionType={transactionType}
        onClose={onClose}
      />
    </Dialog>
  );
};

export default AddTransactionModal;
