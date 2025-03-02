import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import hero1 from "@/public/images/pexels-mateusz-dach-99805-2547541.jpg";
import hero2 from "@/public/images/pexels-mateusz-dach-99805-2547541.jpg";
import hero3 from "@/public/images/pexels-muffin-1616097.jpg";
import hero4 from "@/public/images/pexels-shiny-diamond-3373739.jpg";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
const carouselImages = [hero1, hero2, hero3, hero4];
function HeroCarousel() {
  return (
    <Carousel className="w-full lg:w-[400]  mx-auto">
      <CarouselContent>
        {carouselImages.map((image, index) => {
          return (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6 h-full">
                    <Image
                      src={image}
                      alt="hero"
                      className="object-cover h-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default HeroCarousel;
