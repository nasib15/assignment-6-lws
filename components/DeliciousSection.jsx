import { getSortedRatingRecipes } from "@/utils/getSortedRatingRecipes";
import { getThumbnailImage } from "@/utils/getThumbnailImage";
import Image from "next/image";
import { StarIcon } from "./Icons/SVG";

const DeliciousSection = () => {
  const sortedRatingRecipes = getSortedRatingRecipes().slice(0, 3);

  return (
    <section className="mb-16" id="super_delicious">
      <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {sortedRatingRecipes?.map((recipe, index) => (
          <div key={index}>
            <Image
              src={getThumbnailImage(recipe.thumbnail)}
              width={300}
              height={300}
              alt={recipe.title}
              className="w-full h-[300px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
            <div className="flex items-center text-yellow-500 mb-2">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <p className="text-gray-600">{recipe.cooking_time}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default DeliciousSection;
