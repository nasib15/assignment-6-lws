import getCategories from "./getCategories";
import getRecipes from "./getRecipes";

const recipes = getRecipes();

const categories = getCategories();

export const getRecipesByCategory = (categoryName) => {
  const categoryId = categories.find(
    (category) => category.name.toLowerCase() === categoryName
  )?.id;

  return recipes.filter((recipe) => recipe.category_id === categoryId);
};
