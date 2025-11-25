import AddTransactionCard from "./components/AddTransactionCard";
import { useTransactionStore } from "../store/transactionStore";
import { Box } from "@mui/material";
const Home = () => {
    const transactions = useTransactionStore((state) => state.transactions);
  return (
    <>
      <h1>Home</h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AddTransactionCard />
      </Box>
       <div>
      {transactions.map((t) => (
        <div key={t.id}>
          {t.amount} - {t.category} - {t.description}
        </div>
      ))}
    </div>
    </>
  );
};

export default Home;
