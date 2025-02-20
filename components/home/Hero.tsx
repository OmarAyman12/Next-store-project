import { Section } from "lucide-react";
import React from "react";
import HeroCarousel from "./HeroCarousel";
import { Button } from "../ui/button";
import Link from "next/link";

function Hero() {
  return (
    <section className="m-3 flex">
      <div className="lg:max-w-[700]">
        <h1>We are changing the way people shop</h1>
        <p>
          Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore
          etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat,
          authentic chillwave trust fund. Viral typewriter fingerstache
          pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch
          pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk
          microdosing gochujang live-edge",
        </p>
        <Button asChild size="lg">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>

      <HeroCarousel />
    </section>
  );
}

export default Hero;
