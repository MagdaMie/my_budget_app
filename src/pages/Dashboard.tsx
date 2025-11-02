import { useState } from "react";
import Balance from "../components/Balance";
import Chart from "../components/Chart";
import CategoryList from "../components/CategoryList";
import TransactionForm from "../components/TransactionForm";
import { useTransactionStore } from "../store/useTransactionStore";
import type { Category } from "../types/category";
import type { Transaction } from "../types/transaction";

const Dashboard = () => {
  const { addTransaction } = useTransactionStore();
  const [selectedCategory, setSelectedcategory] = useState<Category | null>(
    null
  );

  const handleCategoryClick = (category: Category) => {
    setSelectedcategory(category);
  };

  const handleCloseForm = () => {
    setSelectedcategory(null);
  }

  const handleSubmit = (transaction: Transaction) => {
    addTransaction(transaction);
  };


  return (
    <>
      <Balance />
      <Chart />
      <CategoryList onCategoryClick={handleCategoryClick}/>
      {selectedCategory && (
        <TransactionForm
        category= {selectedCategory}
        onClose={handleCloseForm}
        onSubmit={handleSubmit} 
        />
      )}
    </>
  );
};

export default Dashboard;
