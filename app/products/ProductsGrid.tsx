import React from "react";
import db from "@/utils/db";
import { Product } from "@prisma/client";
import { formatCurrency } from "@/utils/format";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import FavoritesToggleButton from "./FavoritesToggleButton";
function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 pt-12 gap-4 mx-20 place-items-center">
      {products.map((product) => {
        const { name, price, image } = product;
        const productId = product.id;
        const dollarAmount = formatCurrency(price);
        return (
          <article key={productId} className="group relative">
            <Link href={`/products/${productId}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow lg:w-[500px] mb-10">
                <CardContent className="mt-5">
                  <div className="relative h-64 md:h-48 w-full rounded">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      priority
                      className="rounded w-full object-cover transform group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="font-bold py-2">{name}</h2>
                    <p className="">{dollarAmount}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-6 right-3">
              <FavoritesToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ProductsGrid;
