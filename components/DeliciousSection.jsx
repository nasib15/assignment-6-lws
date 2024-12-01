import { getCategoryName } from "@/utils/getCategoryName";
import { getSortedRatingRecipes } from "@/utils/getSortedRatingRecipes";
import { getThumbnailImage } from "@/utils/getThumbnailImage";
import getTitleByHyphen from "@/utils/getTitleByHyphen";
import Image from "next/image";
import Link from "next/link";
import StarRating from "./StarRating";

const DeliciousSection = () => {
  const sortedRatingRecipes = getSortedRatingRecipes().slice(0, 3);

  return (
    <section className="mb-16" id="super_delicious">
      <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {sortedRatingRecipes?.map((recipe, index) => (
          <Link
            href={`/${getCategoryName(recipe.category_id)}/${getTitleByHyphen(
              recipe.title
            )}`}
            key={index}
          >
            <div>
              <Image
                src={getThumbnailImage(recipe.thumbnail)}
                width={300}
                height={300}
                alt={recipe.title}
                className="w-full h-[300px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <div className="flex items-center text-yellow-500 mb-2">
                <StarRating rating={recipe.rating?.average_rating} />
                <span className="text-gray-500 text-sm ml-1">
                  ({recipe.rating?.average_rating})
                </span>
              </div>
              <p className="text-gray-600">{recipe.cooking_time}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DeliciousSection;
