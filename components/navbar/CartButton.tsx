import { MdAddShoppingCart } from "react-icons/md";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function CartButton() {
  return (
    <Button asChild variant="outline" size="icon">
      <Link href="/cart"><MdAddShoppingCart/></Link>
    </Button>
  );
}

export default CartButton;
