import Image from "next/image";

const LatestRecipeSection = () => {
  return (
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Latest Recipes</h2>
      <div class="grid md:grid-cols-4 gap-8">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1559564121-d12c8f29e8cd?q=100&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Strawberry Cream"
            width={400}
            height={400}
            className="rounded-lg object-cover h-[300px] mb-4"
          />
          <h3 class="text-lg font-semibold mb-2">Strawberry Cream</h3>
          <p class="text-gray-600">Dessert</p>
        </div>
        <div>
          <Image
            src="https://plus.unsplash.com/premium_photo-1664472634106-1430c3973e68?q=100&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Creamy Garlic Pasta"
            width={400}
            height={400}
            className="rounded-lg object-cover h-[300px] mb-4"
          />
          <h3 class="text-lg font-semibold mb-2">Creamy Garlic Pasta</h3>
          <p class="text-gray-600">Pasta</p>
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1694067508035-6cccccb95cb0?q=100&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Blueberry Muffins"
            width={400}
            height={400}
            className="rounded-lg object-cover h-[300px] mb-4"
          />
          <h3 class="text-lg font-semibold mb-2">Blueberry Muffins</h3>
          <p class="text-gray-600">Breakfast</p>
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=100&w=1671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Chicken Tikka Masala"
            width={400}
            height={400}
            className="rounded-lg object-cover h-[300px] mb-4"
          />
          <h3 class="text-lg font-semibold mb-2">Chicken Tikka Masala</h3>
          <p class="text-gray-600">Dinner</p>
        </div>
      </div>
    </section>
  );
};
export default LatestRecipeSection;
