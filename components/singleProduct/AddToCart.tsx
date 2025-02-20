import React from "react";
import { Button } from "../ui/button";
Button;
function AddToCart({ productId }: { productId: string }) {
  return (
    <div>
      <Button className="capitalize mt-8">Add to Cart</Button>
    </div>
  );
}

export default AddToCart;
