import { getRecipesByCategory } from "@/utils/getRecipesByCategory";
import { getThumbnailImage } from "@/utils/getThumbnailImage";
import Image from "next/image";

const RecipePage = ({ params }) => {
  const { recipe } = params;

  const recipes = getRecipesByCategory(recipe);

  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-4xl font-bold mb-2">
            {recipe}{" "}
            <span class="text-gray-500 text-2xl font-normal">
              ({recipes?.length} Recipes)
            </span>
          </h1>
          <p class="text-gray-600">
            One thing I learned living in the Canarsie section of Brooklyn, NY
            was how to cook a good Italian meal. Here is a recipe I created
            after having this dish in a restaurant. Enjoy!
          </p>
        </div>
      </div>

      {/* recipe list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* recipe card */}
        {recipes?.map((recipe, index) => (
          <div
            key={index}
            class="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src={getThumbnailImage(recipe?.thumbnail)}
              alt={recipe?.title}
              class="w-full h-48 object-cover"
              width={300}
              height={192}
            />
            <div class="p-4">
              <h2 class="font-semibold text-lg mb-2">{recipe?.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
export default RecipePage;
