import { getCategoryName } from "@/utils/getCategoryName";
import { getRecipesByCategory } from "@/utils/getRecipesByCategory";
import { getThumbnailImage } from "@/utils/getThumbnailImage";
import getTitleByHyphen from "@/utils/getTitleByHyphen";
import Image from "next/image";
import Link from "next/link";

const RecipePage = ({ params }) => {
  const { recipe } = params;

  const recipes = getRecipesByCategory(recipe);

  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            {recipe}{" "}
            <span className="text-gray-500 text-2xl font-normal">
              ({recipes?.length} Recipes)
            </span>
          </h1>
          <p className="text-gray-600">
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
          <Link
            key={index}
            href={`/${getCategoryName(recipe.category_id)}/${getTitleByHyphen(
              recipe.title
            )}`}
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src={getThumbnailImage(recipe?.thumbnail)}
                alt={recipe?.title}
                className="w-full h-48 object-cover"
                width={300}
                height={192}
              />
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-2">{recipe?.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};
export default RecipePage;
