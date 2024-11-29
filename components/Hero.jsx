import getRecipes from "@/utils/getRecipes";
import { getThumbnailImage } from "@/utils/getThumbnailImage";
import Image from "next/image";

const Hero = () => {
  const recipes = getRecipes();
  const heroRecipe = recipes[0];
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
          <a
            href="./blog-details.html"
            className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
          >
            View Recipe
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
