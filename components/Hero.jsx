import getCategories from "@/utils/getCategories";
import getRecipes from "@/utils/getRecipes";
import { getThumbnailImage } from "@/utils/getThumbnailImage";
import getTitleByHyphen from "@/utils/getTitleByHyphen";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const recipes = getRecipes();

  const heroRecipe = recipes[18];
  const heroRecipeId = heroRecipe.category_id;

  const categories = getCategories();
  const heroCategoryName = categories.find(
    (category) => category.id === heroRecipeId
  ).name;

  const { title, description, thumbnail } = heroRecipe;

  return (
    <section className="mb-16 bg-orange-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src={getThumbnailImage(thumbnail)}
            alt={title}
            width={500}
            height={450}
            className="w-full h-[450px] object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-gray-600 mb-4">{description}</p>
          <Link
            href={`/${heroCategoryName}/${getTitleByHyphen(title)}`}
            className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
