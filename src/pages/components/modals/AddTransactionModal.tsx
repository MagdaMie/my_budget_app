import { Dialog } from "@mui/material";
import AddTransactionCard from "../AddTransactionCard";

type AddTransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory: string;
};

const AddTransactionModal = ({
  isOpen,
  onClose,
  defaultCategory,
}: AddTransactionModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <AddTransactionCard defaultCategory={defaultCategory} onClose={onClose} />
    </Dialog>
  );
};

export default AddTransactionModal;
