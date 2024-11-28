import Image from "next/image";
import Mailbox from "./Mailbox";

const PopularCategories = () => {
  return (
    <>
      {/* Popular categories */}
      <section class="mb-16">
        <div class="flex justify-between items-top">
          <h2 class="text-3xl font-bold mb-8">Popular Categories</h2>
          <a href="./category.html" class="text-orange-500">
            View All
          </a>
        </div>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
          <div class="cursor-pointer text-center group">
            <div class="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto relative">
              <Image
                src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=100&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Breakfast"
                fill={true}
                class="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p class="transition-transform duration-300 group-hover:scale-105">
              Breakfast
            </p>
          </div>
          <div class="cursor-pointer text-center group">
            <div class="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto relative">
              <Image
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=100&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Vegan"
                fill={true}
                class="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p class="transition-transform duration-300 group-hover:scale-105">
              Vegan
            </p>
          </div>
          <div class="cursor-pointer text-center group">
            <div class="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto relative">
              <Image
                src="https://images.unsplash.com/photo-1448907503123-67254d59ca4f?q=100&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Meat"
                fill={true}
                class="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p class="transition-transform duration-300 group-hover:scale-105">
              Meat
            </p>
          </div>
          <div class="cursor-pointer text-center group">
            <div class="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto relative">
              <Image
                src="https://images.unsplash.com/photo-1469533778471-92a68acc3633?q=100&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dessert"
                fill={true}
                class="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p class="transition-transform duration-300 group-hover:scale-105">
              Dessert
            </p>
          </div>
          <div class="cursor-pointer text-center group">
            <div class="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto relative">
              <Image
                src="https://images.unsplash.com/photo-1663861623497-2151b2bb21fe?q=100&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Lunch"
                fill={true}
                class="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p class="transition-transform duration-300 group-hover:scale-105">
              Lunch
            </p>
          </div>
          <div class="cursor-pointer text-center group">
            <div class="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto relative">
              <Image
                src="https://images.unsplash.com/photo-1582570675095-9b679953577e?q=100&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Chocolate"
                fill={true}
                class="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p class="transition-transform duration-300 group-hover:scale-105">
              Chocolate
            </p>
          </div>
        </div>
      </section>

      {/* Mailbox */}
      <Mailbox />
    </>
  );
};
export default PopularCategories;
