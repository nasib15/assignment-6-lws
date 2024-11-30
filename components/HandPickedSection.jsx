import { getCategoryName } from "@/utils/getCategoryName";
import getRecipes from "@/utils/getRecipes";
import { getThumbnailImage } from "@/utils/getThumbnailImage";
import getTitleByHyphen from "@/utils/getTitleByHyphen";
import Image from "next/image";
import Link from "next/link";
import LinkComponent from "./LinkComponent";

const HandPickedSection = () => {
  const recipes = getRecipes().slice(20, 22);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 animate-fade-in-down">
        Hand-Picked Collections
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {recipes?.map((recipe, index) => (
          <Link
            key={index}
            href={`/${getCategoryName(recipe.category_id)}/${getTitleByHyphen(
              recipe.title
            )}`}
          >
            <div className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer">
              <Image
                src={getThumbnailImage(recipe?.thumbnail)}
                alt={recipe.title}
                className="rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                style={{ width: "600px", height: "400px" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
                <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                <LinkComponent
                  link={`/categories/${getCategoryName(recipe.category_id)}`}
                  className="text-orange-300 hover:underline"
                >
                  View Collection
                </LinkComponent>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default HandPickedSection;
