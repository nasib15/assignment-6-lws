import { getCategoryName } from "@/utils/getCategoryName";
import getLatestRecipes from "@/utils/getLatestRecipes";
import { getThumbnailImage } from "@/utils/getThumbnailImage";
import getTitleByHyphen from "@/utils/getTitleByHyphen";
import Image from "next/image";
import Link from "next/link";

const LatestRecipeSection = () => {
  const latestRecipes = getLatestRecipes().slice(0, 4);

  return (
    <section id="recipes" className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {latestRecipes?.map((recipe, index) => (
          <Link
            href={`/${getCategoryName(recipe.category_id)}/${getTitleByHyphen(
              recipe.title
            )}`}
            key={index}
          >
            <div>
              <Image
                src={getThumbnailImage(recipe?.thumbnail)}
                alt={recipe.title}
                width={288}
                height={300}
                className="rounded-lg object-cover h-[300px] mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600">{recipe.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default LatestRecipeSection;
