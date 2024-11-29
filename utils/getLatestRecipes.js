import getRecipes from "./getRecipes";

const recipes = getRecipes();

const getLatestRecipes = () => {
  return recipes.sort(
    (a, b) => new Date(b.published_date) - new Date(a.published_date)
  );
};

export default getLatestRecipes;
