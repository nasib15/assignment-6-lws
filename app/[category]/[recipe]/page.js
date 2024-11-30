import { SaveIcon, ShareIcon } from "@/components/Icons/SVG";
import avatar from "@/public/assets/profile.png";
import { getRecipesByCategory } from "@/utils/getRecipesByCategory";
import { getSingleRecipeByCategory } from "@/utils/getSingleRecipeByCategory";
import { getThumbnailImage } from "@/utils/getThumbnailImage";
import Image from "next/image";
import Link from "next/link";

const RecipeDetailsPage = ({ params }) => {
  const recipe = getSingleRecipeByCategory(
    params.category,
    params.recipe.replace(/%20/g, " ").replace(/%3A/g, ":")
  );

  const { category } = params;

  //   get all recipes under a category
  const recipes = getRecipesByCategory(category);

  //   get all recipes except the current recipe
  const relatedRecipes = recipes?.filter(
    (recipe) =>
      recipe?.title !== params.recipe.replace(/%20/g, " ").replace(/%3A/g, ":")
  );

  return (
    <main className="container mx-auto px-4 mt-[100px]">
      {/* recipe details */}
      <article>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{recipe?.title}</h1>
        <div className="flex items-center space-x-4 mb-6">
          <Image
            src={avatar}
            alt="Author"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-600">{recipe?.author}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">{recipe?.cooking_time}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">
            {new Date(recipe?.published_date).toLocaleDateString("en-UK", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
              <ShareIcon />
              Share
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
              <SaveIcon />
              Save
            </button>
          </div>
        </div>
        <Image
          src={getThumbnailImage(recipe?.thumbnail)}
          alt="Cooking Image"
          className="w-full h-64 sm:h-[320px] md:h-[413px] lg:h-[517px] xl:h-[700px] object-cover mb-8 rounded-lg"
        />
        <p className="text-gray-600 mb-8">{recipe?.description}</p>

        <h2 className="text-3xl font-bold mb-4">Before you begin</h2>
        <p className="mb-8">
          Food qualities braise chicken cuts bowl through slices butternut
          snack. Tender meat juicy dinners. One-pot low heat plenty of time
          adobo fat raw soften fruit. sweet renders bone-in marrow richness
          kitchen, fricassee basted putter.
        </p>

        <h2 className="text-3xl font-bold mb-4">Here are the basics</h2>
        <p className="mb-8">
          Juicy meatballs brisket slammin&apos; baked shoulder. Juicy smoker soy
          sauce burgers brisket. polenta mustard hunk greens. Wine technique
          snack skewers chuck excess. Oil heat slowly. slices natural delicious,
          set aside magic tbsp skillet, bay leaves brown centerpiece. fruit
          soften edges frond slices onion snack pork steem on wines excess
          technique cup; Cover smoker soy sauce.
        </p>

        <blockquote className="text-3xl font-bold italic text-center my-12 px-4">
          &quot;One cannot think well, love well, sleep well, if one has not
          dined well.&quot;
        </blockquote>
        <p className="text-center text-gray-600 mb-12">
          — Virginia Woolf, A Room of One&apos;s Own
        </p>

        <h2 className="text-3xl font-bold mb-4">In the kitchen</h2>
        <p className="mb-8">
          Gastronomy atmosphere set aside. Slice butternut cooking home.
          Delicious romantic undisturbed raw platter will meld. Thick Skewers
          skillet natural, smoker soy sauce wait roux. slices rosette bone-in
          simmer. Romantic fall-off-the-bone butternut chuck under romas,
          Skewers on culinary experience.
        </p>

        <Image
          src={getThumbnailImage(recipe?.thumbnail)}
          alt="Cooking in kitchen"
          className="w-full h-[384px] mb-8 rounded-lg max-w-xl mx-auto object-cover"
        />

        <p className="mb-8">
          Juicy meatballs brisket slammin&apos; baked shoulder. Juicy smoker soy
          sauce burgers brisket. polenta mustard hunk greens. Wine technique
          snack skewers chuck excess. Oil heat slowly. slices natural delicious,
          set aside magic tbsp skillet, bay leaves brown centerpiece. fruit
          soften edges frond slices onion snack pork steem on wines excess
          technique cup; Cover smoker soy sauce.
        </p>
      </article>

      {/* you might also like */}
      {relatedRecipes?.length > 0 && (
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-8">You might also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedRecipes?.map((recipe) => (
              <div key={recipe?.title}>
                <Link href={`/${category}/${recipe?.title}`}>
                  <Image
                    src={getThumbnailImage(recipe?.thumbnail)}
                    alt={recipe?.title}
                    className="w-full h-60 object-cover rounded-lg mb-2"
                  />
                </Link>
                <h3 className="font-semibold">{recipe?.title}</h3>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};
export default RecipeDetailsPage;
