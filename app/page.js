import DeliciousSection from "@/components/DeliciousSection";
import HandPickedSection from "@/components/HandPickedSection";
import Hero from "@/components/Hero";
import LatestRecipeSection from "@/components/LatestRecipeSection";
import PopularCategories from "@/components/PopularCategories";

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 mt-[100px]">
        <Hero />
        <DeliciousSection />
        <PopularCategories />
        <HandPickedSection />
        <LatestRecipeSection />
      </main>
    </>
  );
}
