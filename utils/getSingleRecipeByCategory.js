import getCategories from "./getCategories";
import getRecipes from "./getRecipes";

const categories = getCategories();

const recipes = getRecipes();

export const getSingleRecipeByCategory = (categoryName, title) => {
  const categoryId = categories.find(
    (category) => category.name.toLowerCase() === categoryName.toLowerCase()
  )?.id;

  const recipe = recipes.find(
    (recipe) =>
      recipe.category_id === categoryId &&
      recipe.title.toLowerCase() === title.toLowerCase()
  );

  return recipe;
};
