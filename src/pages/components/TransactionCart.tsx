import { Box, Typography } from "@mui/material";
import AppIconButton from "./AppIconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  useTransactionStore,
  type Transaction,
} from "../../store/transactionStore";

type TransactionCardProps = {
  transaction: Transaction;
};

const TransactionCard = ({ transaction }: TransactionCardProps) => {
  const removeTransaction = useTransactionStore(
    (state) => state.removeTransaction
  );
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
            onClick={() => removeTransaction(transaction)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TransactionCard;
