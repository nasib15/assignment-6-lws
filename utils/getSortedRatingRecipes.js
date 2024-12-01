import getRecipes from "./getRecipes";

const recipes = getRecipes();

export const getSortedRatingRecipes = () => {
  return recipes.sort(
    (a, b) => b.rating?.average_rating - a.rating?.average_rating
  );
};
