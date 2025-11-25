import AddTransactionCard from "./components/AddTransactionCard";
import { Box } from "@mui/material";
const Home = () => {
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
    </>
  );
};

export default Home;
