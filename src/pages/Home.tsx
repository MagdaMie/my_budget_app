import CategoryList from "./components/CategoryList";
import { incomeCategories } from "@/data/categories";
import { expenseCategories } from "@/data/categories";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import SummaryCard from "./components/SummaryCard";
import useTransactionSummary from "@/hooks/use TransactionSummary";

const Home = () => {
  const { income, expenses, balance } = useTransactionSummary();

  return (
    <>
      <h1>Home</h1>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <SummaryCard title="Balance" amount={balance} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <SummaryCard title="Expenses" amount={expenses} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <SummaryCard title="Income" amount={income} />
          </Grid>
        </Grid>
      </Container>
      <CategoryList categories={expenseCategories} />
      <CategoryList categories={incomeCategories} />
    </>
  );
};

export default Home;
