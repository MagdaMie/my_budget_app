import { useState } from "react";
import { Box } from "@mui/material";
import {
  useTransactionStore,
  type Transaction,
} from "../../store/transactionStore";
import TransactionCard from "./TransactionCart";
import AppSelect from "./AppSelect";
import { categories } from "../../data/categories";

const TransactionsList = () => {
  const transactions = useTransactionStore((state) => state.transactions);

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const fillteredTransactions = selectedCategory
    ? transactions.filter((t) => t.category === selectedCategory)
    : transactions;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          py: 2,
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <AppSelect
          label="Filter by category"
          options={[{ value: "", label: "All" }, ...categories]}
          value={selectedCategory}
          onChange={(value) => setSelectedCategory(value)}
        />
      </Box>

      {fillteredTransactions.map((t: Transaction) => (
        <TransactionCard key={t.id} transaction={t} />
      ))}
    </Box>
  );
};

export default TransactionsList;
