import getRecipes from "./getRecipes";

const recipes = getRecipes();

export const getSortedRatingRecipes = () => {
  return recipes.sort(
    (a, b) => b.rating?.rating_count - a.rating?.rating_count
  );
};
