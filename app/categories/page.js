import getCategories from "@/utils/getCategories";
import { getThumbnailImage } from "@/utils/getThumbnailImage";
import Image from "next/image";
import Link from "next/link";

const CategoriesPage = () => {
  const categories = getCategories();
  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <h1 className="text-5xl font-bold mb-12">Categories</h1>

      {/* category list */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {categories?.map((category) => (
          <div key={category.id} className="text-center">
            <div className="overflow-hidden rounded-full mb-4 relative cursor-pointer">
              <Link href={`/categories/${category.name}`}>
                <Image
                  src={getThumbnailImage(category?.image)}
                  alt={category.title}
                  width={181}
                  height={181}
                  className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </Link>
            </div>
            <h2 className="text-xl font-semibold">{category?.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
};
export default CategoriesPage;
