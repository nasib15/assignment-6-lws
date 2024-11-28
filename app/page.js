import DeliciousSection from "@/components/DeliciousSection";
import Hero from "@/components/Hero";
import PopularCategories from "@/components/PopularCategories";

export default function Home() {
  return (
    <main className="container mx-auto px-4 mt-[100px]">
      <Hero />
      <DeliciousSection />
      <PopularCategories />
    </main>
  );
}
