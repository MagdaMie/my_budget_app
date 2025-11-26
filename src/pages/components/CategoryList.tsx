import CategoryCard from "./CategoryCard";
import { categories } from "../../data/categories";
import { useTransactionStore } from "../../store/transactionStore";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

const CategoryList = () => {
  const transactions = useTransactionStore((state) => state.transactions);

  const calculateTotal = (categoryValue: string) =>
    transactions
      .filter((t) => t.category === categoryValue)
      .reduce((sum, t) => sum + Number(t.amount), 0);

  const handleSelectCategory = (value: string) => {
    // eslint-disable-next-line no-console
    console.log("Selected category: ", value);
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
    </Container>
  );
};

export default CategoryList;
