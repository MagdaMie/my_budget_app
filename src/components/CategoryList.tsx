import { categories } from "../data/categories";
import type { Category } from "../types/category";

type CategoryListProps = {
  onCategoryClick: (category: Category) => void;
};

const CategoryList = ({ onCategoryClick }: CategoryListProps) => {
  return (
    <>
      {categories.map((category: Category) => (
        <div key={category.id} onClick={() => onCategoryClick(category)}>
          <div>{category.icon}</div>
          <div>{category.name}</div>
        </div>
      ))}
    </>
  );
};

export default CategoryList;
