import LoadingContainer from "@/components/globalc/LoadingContainer";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import Hero from "@/components/home/Hero";
import { Suspense } from "react";
function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer/>}>
        <FeaturedProduct />
      </Suspense>
    </>
  );
}

export default HomePage;
