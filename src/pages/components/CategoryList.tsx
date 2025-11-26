import { useState } from "react";
import CategoryCard from "./CategoryCard";
import { categories } from "../../data/categories";
import { useTransactionStore } from "../../store/transactionStore";
import Grid from "@mui/material/Grid";
import { Container, Dialog } from "@mui/material";
import AddTransactionCard from "./AddTransactionCard";

const CategoryList = () => {
  const transactions = useTransactionStore((state) => state.transactions);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const calculateTotal = (categoryValue: string) =>
    transactions
      .filter((t) => t.category === categoryValue)
      .reduce((sum, t) => sum + Number(t.amount), 0);

  const handleSelectCategory = (value: string) => {
    setSelectedCategory(value);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedCategory("");
  };

  return (
    <Container maxWidth="lg" sx={{ p: 4 }}>
      <Grid container spacing={2}>
        {categories.map((cat) => (
          <Grid key={cat.value}>
            <CategoryCard
              category={cat}
              total={calculateTotal(cat.value)}
              onSelect={() => handleSelectCategory(cat.value)}
            />
          </Grid>
        ))}
      </Grid>
      <Dialog open={isOpen} onClose={handleCloseModal}>
        {isOpen && (
          <AddTransactionCard
            defaultCategory={selectedCategory}
            onClose={handleCloseModal}
          />
        )}
      </Dialog>
    </Container>
  );
};

export default CategoryList;
