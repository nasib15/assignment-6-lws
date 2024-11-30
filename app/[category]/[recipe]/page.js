import { SaveIcon, ShareIcon } from "@/components/Icons/SVG";
import avatar from "@/public/assets/profile.png";
import { getSingleRecipeByCategory } from "@/utils/getSingleRecipeByCategory";
import { getThumbnailImage } from "@/utils/getThumbnailImage";
import Image from "next/image";

const RecipeDetailsPage = ({ params }) => {
  const recipe = getSingleRecipeByCategory(
    params.category,
    params.recipe.replace(/%20/g, " ").replace(/%3A/g, ":")
  );

  return (
    <main className="container mx-auto px-4 mt-[100px]">
      <article>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">{recipe.title}</h1>
        <div class="flex items-center space-x-4 mb-6">
          <Image
            src={avatar}
            alt="Author"
            width={32}
            height={32}
            class="w-8 h-8 rounded-full"
          />
          <span class="text-gray-600">{recipe?.author}</span>
          <span class="text-gray-400">|</span>
          <span class="text-gray-600">{recipe?.cooking_time}</span>
          <span class="text-gray-400">|</span>
          <span class="text-gray-600">
            {new Date(recipe?.published_date).toLocaleDateString("en-UK", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <div class="flex justify-between items-center mb-8">
          <div class="flex space-x-4">
            <button class="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
              <ShareIcon />
              Share
            </button>
            <button class="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
              <SaveIcon />
              Save
            </button>
          </div>
        </div>
        <Image
          src={getThumbnailImage(recipe?.thumbnail)}
          alt="Cooking Image"
          class="w-full h-64 sm:h-[320px] md:h-[413px] lg:h-[517px] xl:h-[700px] object-cover mb-8 rounded-lg"
        />
        <p class="text-gray-600 mb-8">
          One thing I learned living in the Catskills section of Brooklyn, NY
          was how to cook a good Italian meal. Here is a recipe I created after
          having this dish in a restaurant. Enjoy!
        </p>

        <h2 class="text-3xl font-bold mb-4">Before you begin</h2>
        <p class="mb-8">
          Food qualities braise chicken cuts bowl through slices butternut
          snack. Tender meat juicy dinners. One-pot low heat plenty of time
          adobo fat raw soften fruit. sweet renders bone-in marrow richness
          kitchen, fricassee basted putter.
        </p>

        <h2 class="text-3xl font-bold mb-4">Here are the basics</h2>
        <p class="mb-8">
          Juicy meatballs brisket slammin&apos; baked shoulder. Juicy smoker soy
          sauce burgers brisket. polenta mustard hunk greens. Wine technique
          snack skewers chuck excess. Oil heat slowly. slices natural delicious,
          set aside magic tbsp skillet, bay leaves brown centerpiece. fruit
          soften edges frond slices onion snack pork steem on wines excess
          technique cup; Cover smoker soy sauce.
        </p>

        <blockquote class="text-3xl font-bold italic text-center my-12 px-4">
          &quot;One cannot think well, love well, sleep well, if one has not
          dined well.&quot;
        </blockquote>
        <p class="text-center text-gray-600 mb-12">
          — Virginia Woolf, A Room of One&apos;s Own
        </p>

        <h2 class="text-3xl font-bold mb-4">In the kitchen</h2>
        <p class="mb-8">
          Gastronomy atmosphere set aside. Slice butternut cooking home.
          Delicious romantic undisturbed raw platter will meld. Thick Skewers
          skillet natural, smoker soy sauce wait roux. slices rosette bone-in
          simmer. Romantic fall-off-the-bone butternut chuck under romas,
          Skewers on culinary experience.
        </p>

        <Image
          src={getThumbnailImage(recipe?.thumbnail)}
          alt="Cooking in kitchen"
          class="w-full h-[384px] mb-8 rounded-lg max-w-xl mx-auto object-cover"
        />

        <p class="mb-8">
          Juicy meatballs brisket slammin&apos; baked shoulder. Juicy smoker soy
          sauce burgers brisket. polenta mustard hunk greens. Wine technique
          snack skewers chuck excess. Oil heat slowly. slices natural delicious,
          set aside magic tbsp skillet, bay leaves brown centerpiece. fruit
          soften edges frond slices onion snack pork steem on wines excess
          technique cup; Cover smoker soy sauce.
        </p>
      </article>
    </main>
  );
};
export default RecipeDetailsPage;
