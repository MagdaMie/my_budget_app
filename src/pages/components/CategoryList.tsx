import { useMemo, useState } from "react";
import { categories } from "@/data/categories";
import CategoryCard from "./CategoryCard";
import { useTransactionStore } from "@/store/transactionStore";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import AddTransactionModal from "./modals/AddTransactionModal";

const CategoryList = () => {
  const transactions = useTransactionStore((state) => state.transactions);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const calculateTotal = useMemo(() => {
    return (categoryValue: string) =>
      transactions
        .filter((t) => t.category === categoryValue)
        .reduce((sum, t) => sum + Number(t.amount), 0);
  }, [transactions]);

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
          <Grid key={cat.value} size={{ xs: 6, sm: 3, md: 2, lg: 3 }}>
            <CategoryCard
              category={cat}
              totalCategoryAmount={calculateTotal(cat.value)}
              onSelect={() => handleSelectCategory(cat.value)}
            />
          </Grid>
        ))}
      </Grid>
      <AddTransactionModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        defaultCategory={selectedCategory}
      />
    </Container>
  );
};

export default CategoryList;
