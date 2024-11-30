import { getPopularCategories } from "@/utils/getPopularCategories";
import { getThumbnailImage } from "@/utils/getThumbnailImage";
import Image from "next/image";
import Link from "next/link";
import Mailbox from "./Mailbox";

const PopularCategories = () => {
  const sortedCategories = getPopularCategories().slice(0, 6);

  return (
    <>
      {/* Popular categories */}
      <section className="mb-16">
        <div className="flex justify-between items-top">
          <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
          <Link href="/categories" className="text-orange-500">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {sortedCategories?.map((category) => (
            <div key={category.id} className="cursor-pointer text-center group">
              <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto relative">
                <Link href={`/categories/${category.name}`}>
                  <Image
                    src={getThumbnailImage(category.image)}
                    alt={category.name}
                    fill={true}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              </div>
              <p className="transition-transform duration-300 group-hover:scale-105">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mailbox */}
      <Mailbox />
    </>
  );
};
export default PopularCategories;
