import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  useTransactionStore,
  type Transaction,
} from "../../store/transactionStore";
import TransactionCard from "./TransactionCart";
import AppSelect from "./AppSelect";
import { categories } from "../../data/categories";
import AddTransactionModal from "./modals/AddTransactionModal";
const CATEGORY_ALL = {
  value: "",
  label: "All",
};

const TransactionsList = () => {
  const transactions = useTransactionStore((state) => state.transactions);

  const [selectedCategory, setSelectedCategory] = useState<string>(
    CATEGORY_ALL.value
  );

  const filteredTransactions = useMemo(() => {
    return selectedCategory
      ? transactions.filter((t) => t.category === selectedCategory)
      : transactions;
  }, [selectedCategory, transactions]);

  const [isOpen, setIsOpen] = useState(false);
  const [transactionToEdit, setTransactionToEdit] = useState<
    Transaction | undefined
  >(undefined);

  const handleOpenModal = (transaction: Transaction) => {
    setTransactionToEdit(transaction);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setTransactionToEdit(undefined);
    setIsOpen(false);
  };

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
          ariaLabel="Select category to filter transactions"
          options={[CATEGORY_ALL, ...categories]}
          value={selectedCategory}
          onChange={(value) => setSelectedCategory(value)}
        />
      </Box>

      {filteredTransactions.length === 0 ? (
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Typography variant="body1" color="text.secondary">
            No transactions found for the selected category.
          </Typography>
        </Box>
      ) : (
        <>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              width: "100%",
              maxWidth: "600px",
            }}
          >
            {filteredTransactions.map((t) => (
              <li key={t.id} style={{ marginBottom: "12px" }}>
                <TransactionCard
                  transaction={t}
                  openModal={handleOpenModal}
                />
              </li>
            ))}
          </ul>
          <AddTransactionModal
            isOpen={isOpen}
            onClose={handleCloseModal}
            transactionToEdit={transactionToEdit} 
          />{" "}
        </>
      )}
    </Box>
  );
};

export default TransactionsList;
