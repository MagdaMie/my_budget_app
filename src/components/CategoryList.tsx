import { categories } from '../data/categories';
import type { Category } from '../types/category';
import { useTransactionStore } from '../store/useTransactionStore';

type CategoryListProps = {
  onCategoryClick: (category: Category) => void;
};

const CategoryList = ({ onCategoryClick }: CategoryListProps) => {
  const { transactions } = useTransactionStore();

  return (
    <>
      {categories.map((category: Category) => {
        const categoryTotal = transactions
          .filter((t) => t.category === category.name)
          .reduce((sum, t) => sum + t.amount, 0);

        return (
          <div key={category.id} onClick={() => onCategoryClick(category)}>
            <div>{category.icon}</div>
            <div>{category.name}</div>
            <div>{categoryTotal}</div>
          </div>
        );
      })}
    </>
  );
};

export default CategoryList;
