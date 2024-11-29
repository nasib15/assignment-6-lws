import breakfast from "@/public/assets/category/Breakfast.jpg";
import burger from "@/public/assets/category/Burger.jpg";
import cake from "@/public/assets/category/Cake.jpg";
import chicken from "@/public/assets/category/Chicken.jpg";
import desserts from "@/public/assets/category/Desserts.jpg";
import dips from "@/public/assets/category/Dips.jpg";
import meat from "@/public/assets/category/Meat.jpg";
import pancakes from "@/public/assets/category/Pancakes.jpg";
import pasta from "@/public/assets/category/Pasta.jpg";
import pastries from "@/public/assets/category/Pastries.jpg";
import pizza from "@/public/assets/category/Pizza.jpg";
import ramen from "@/public/assets/category/Ramen.jpg";
import salad from "@/public/assets/category/Salad.jpg";
import sandwiches from "@/public/assets/category/Sandwiches.jpg";
import seafood from "@/public/assets/category/Seafood.jpg";
import smoothies from "@/public/assets/category/Smoothies.jpg";
import soup from "@/public/assets/category/Soup.jpg";
import vegan from "@/public/assets/category/Vegan.jpg";
import waffles from "@/public/assets/category/Waffles.jpg";
import thumb1 from "@/public/assets/thumbs/thumb-1.jpg";
import thumb10 from "@/public/assets/thumbs/thumb-10.jpg";
import thumb11 from "@/public/assets/thumbs/thumb-11.jpg";
import thumb12 from "@/public/assets/thumbs/thumb-12.jpg";
import thumb13 from "@/public/assets/thumbs/thumb-13.jpg";
import thumb14 from "@/public/assets/thumbs/thumb-14.jpg";
import thumb15 from "@/public/assets/thumbs/thumb-15.jpg";
import thumb2 from "@/public/assets/thumbs/thumb-2.jpg";
import thumb3 from "@/public/assets/thumbs/thumb-3.jpg";
import thumb4 from "@/public/assets/thumbs/thumb-4.jpg";
import thumb5 from "@/public/assets/thumbs/thumb-5.jpg";
import thumb6 from "@/public/assets/thumbs/thumb-6.jpg";
import thumb7 from "@/public/assets/thumbs/thumb-7.jpg";
import thumb8 from "@/public/assets/thumbs/thumb-8.jpg";
import thumb9 from "@/public/assets/thumbs/thumb-9.jpg";

const thumbnails = {
  "thumb-1.jpg": thumb1,
  "thumb-2.jpg": thumb2,
  "thumb-3.jpg": thumb3,
  "thumb-4.jpg": thumb4,
  "thumb-5.jpg": thumb5,
  "thumb-6.jpg": thumb6,
  "thumb-7.jpg": thumb7,
  "thumb-8.jpg": thumb8,
  "thumb-9.jpg": thumb9,
  "thumb-10.jpg": thumb10,
  "thumb-11.jpg": thumb11,
  "thumb-12.jpg": thumb12,
  "thumb-13.jpg": thumb13,
  "thumb-14.jpg": thumb14,
  "thumb-15.jpg": thumb15,
  "/category/Breakfast.jpg": breakfast,
  "/category/Desserts.jpg": desserts,
  "/category/Seafood.jpg": seafood,
  "/category/Soup.jpg": soup,
  "/category/Burger.jpg": burger,
  "/category/Pasta.jpg": pasta,
  "/category/Pizza.jpg": pizza,
  "/category/Salad.jpg": salad,
  "/category/Cake.jpg": cake,
  "/category/Chicken.jpg": chicken,
  "/category/Dips.jpg": dips,
  "/category/Vegan.jpg": vegan,
  "/category/Meat.jpg": meat,
  "/category/Ramen.jpg": ramen,
  "/category/Sandwiches.jpg": sandwiches,
  "/category/Smoothies.jpg": smoothies,
  "/category/Waffles.jpg": waffles,
  "/category/Pancakes.jpg": pancakes,
  "/category/Pastries.jpg": pastries,
};

export const getThumbnailImage = (thumbnail) => {
  return thumbnails[thumbnail];
};
