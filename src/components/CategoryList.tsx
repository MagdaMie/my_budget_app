import { categories } from "../data/categories";
import type { Category } from "../types/category";

const CategoryList = () => {
  return (
    <>
      {categories.map((category: Category) => (
        <div key={category.id}>
          <div>{category.icon}</div>
          <div>{category.name}</div>
        </div>
      ))}
    </>
  );
};

export default CategoryList;
