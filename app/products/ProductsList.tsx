import React from "react";
import { formatCurrency } from "@/utils/format";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@prisma/client";
import Image from "next/image";
import FavoritesToggleButton from "./FavoritesToggleButton";
import { Divide } from "lucide-react";
import ProductsPage from "./page";

function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { name, price, image } = product;
        const productId = product.id;
        const dollarAmount = formatCurrency(price);
        return (
          <section key={productId} className="group relative">
            <Link href={`/products/${productId}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent className="">
                  <div className="relative h-64 md:h-48 rounded overflow-hidden max-w-xs ">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      priority
                      className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500 "
                    />
                  </div>
                  <div>
                    <h1>{name}</h1>
                    <p>{dollarAmount}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-6 right-6 z-5">
              <FavoritesToggleButton productId={productId} />
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default ProductsList;
