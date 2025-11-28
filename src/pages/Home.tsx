import CategoryList from "./components/CategoryList";
import { useTransactionStore } from "../store/transactionStore";

const Home = () => {
  const transactions = useTransactionStore((state) => state.transactions);

  return (
    <>
      <h1>Home</h1>
      <div>
        {transactions.map((t) => (
          <div key={t.id}>
            {t.amount} - {t.category} - {t.description}
          </div>
        ))}
      </div>
      <CategoryList />
    </>
  );
};

export default Home;
