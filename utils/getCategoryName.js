import getCategories from "./getCategories";

export const getCategoryName = (categoryId) => {
  const categories = getCategories();

  const categoryName = categories.find(
    (category) => category.id === categoryId
  )?.name;
  return categoryName;
};
