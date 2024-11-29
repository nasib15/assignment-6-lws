import getCategories from "./getCategories";
import getRecipes from "./getRecipes";

const recipes = getRecipes();

const categories = getCategories();

export const getRecipeByCategory = (categoryName) => {
  const categoryId = categories.find(
    (category) => category.name === categoryName
  )?.id;

  return recipes.filter((recipe) => recipe.category_id === categoryId);
};
