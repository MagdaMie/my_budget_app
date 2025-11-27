import { Box } from "@mui/material";
import {
  useTransactionStore,
  type Transaction,
} from "../../store/transactionStore";
import TransactionCard from "./TransactionCart";

const TransactionsList = () => {
  const transactions = useTransactionStore((state) => state.transactions);
  return (
    <Box sx={{ display:"flex", flexDirection:"column", alignItems:"center", p :2}}>
      {transactions.map((t: Transaction) => (
        <TransactionCard key={t.id} transaction={t} />
      ))}
    </Box>
  );
};

export default TransactionsList;
