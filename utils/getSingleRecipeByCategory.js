import getCategories from "./getCategories";
import getRecipes from "./getRecipes";

const categories = getCategories();

const recipes = getRecipes();

export const getSingleRecipeByCategory = (categoryName, title) => {
  const categoryId = categories.find(
    (category) => category.name === categoryName
  )?.id;

  const recipe = recipes.find(
    (recipe) => recipe.category_id === categoryId && recipe.title === title
  );

  return recipe;
};
