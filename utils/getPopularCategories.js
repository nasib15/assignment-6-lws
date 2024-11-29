import getCategories from "./getCategories";
import getRecipes from "./getRecipes";

const categories = getCategories();

const recipes = getRecipes();

const recipesPerCategory = recipes.reduce((acc, recipe) => {
  const categoryId = recipe.category_id;
  //   make an object by category and count the recipes
  acc[categoryId] = (acc[categoryId] || 0) + 1;
  return acc;
}, {});

const categoriesWithCount = categories.map((category) => {
  return {
    ...category,
    count: recipesPerCategory[category.id],
  };
});

export const getPopularCategories = () => {
  return categoriesWithCount.sort((a, b) => b.count - a.count);
};
