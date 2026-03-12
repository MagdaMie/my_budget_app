import { Box, Typography } from "@mui/material";
import AppIconButton from "./AppIconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  useTransactionStore,
  type Transaction,
} from "../../store/transactionStore";
import ConfirmationModal from "./modals/ConfirmationModal";
import { useDialogState } from "@/helpers/useDialogState";
import { toast } from "react-toastify";

type TransactionCardProps = {
  transaction: Transaction;
};

const TransactionCard = ({ transaction }: TransactionCardProps) => {
  const removeTransaction = useTransactionStore(
    (state) => state.removeTransaction
  );
  const { isOpen, open, close } = useDialogState();

  const handleConfirm = () => {
    removeTransaction(transaction);
    toast.error("Transaction deleted");
    close();
  };
  return (
    <Box
      sx={{
        border: 1,
        borderRadius: 2,
        borderColor: "divider",
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        bgcolor: "background.paper",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography>{transaction.amount}</Typography>
            <Typography>{transaction.category}</Typography>
          </Box>
          <Typography
            sx={{
              whiteSpace: "normal",
              wordBreak: "break-word",
              maxWidth: "100%",
            }}
          >
            {transaction.description}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <AppIconButton
            type="edit"
            ariaLabel="edit"
            icon={<EditIcon />}
            onClick={() => {}} //do pozniejszej edycji
          />
          <AppIconButton
            type="delete"
            ariaLabel="delete"
            icon={<DeleteIcon />}
            onClick={open}
          />
        </Box>
      </Box>
      <ConfirmationModal
        isOpen={isOpen}
        onCancel={close}
        onConfirm={handleConfirm}
        description="Are you sure you want to delete this transaction?"
      />
    </Box>
  );
};

export default TransactionCard;
