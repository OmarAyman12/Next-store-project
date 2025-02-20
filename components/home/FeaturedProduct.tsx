import { fetchFeaturedProduct } from "@/utils/actions";
import React from "react";
import EmptyList from "../globalc/EmptyList";
import { Section } from "lucide-react";
import SectionTitle from "../globalc/SectionTitle";
import ProductsGrid from "@/app/products/ProductsGrid";

async function FeaturedProduct() {
  const products = await fetchFeaturedProduct();
  if (products.length === 0) {
    return <EmptyList />;
  }
  return (
    <section>
      <SectionTitle text="featured products" />
      <ProductsGrid products={products} />
    </section>
  );
}

export default FeaturedProduct;
