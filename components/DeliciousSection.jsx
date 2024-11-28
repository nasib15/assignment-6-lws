import Image from "next/image";
import { StarIcon } from "./Icons/SVG";
import Thumb5 from "@/assets/thumbs/thumb-5.jpg";
import Thumb6 from "@/assets/thumbs/thumb-6.jpg";
import Thumb7 from "@/assets/thumbs/thumb-7.jpg";

const DeliciousSection = () => {
  return (
    <section class="mb-16" id="super_delicious">
      <h2 class="text-3xl font-bold mb-8">Super Delicious</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <Image
            src={Thumb5}
            alt="Chicken Meatball with Creamy Cheese"
            class="w-full h-[300px] object-cover rounded-lg mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">
            Chicken Meatball with Creamy Cheese
          </h3>
          <div class="flex items-center text-yellow-500 mb-2">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <p class="text-gray-600">30 Minutes</p>
        </div>
        <div>
          <Image
            src={Thumb6}
            alt="The Creamiest Creamy Chicken"
            class="w-full h-[300px] object-cover rounded-lg mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">
            The Creamiest Creamy Chicken
          </h3>
          <div class="flex items-center text-yellow-500 mb-2">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <p class="text-gray-600">45 Minutes</p>
        </div>
        <div>
          <Image
            src={Thumb7}
            alt="Classic Beef Burger"
            class="w-full h-[300px] object-cover rounded-lg mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">Classic Beef Burger</h3>
          <div class="flex items-center text-yellow-500 mb-2">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <p class="text-gray-600">30 Minutes</p>
        </div>
      </div>
    </section>
  );
};
export default DeliciousSection;
