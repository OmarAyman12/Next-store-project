import { Button } from "@/components/ui/button";
import { FaHeart } from "react-icons/fa";

function FavoritesToggleButton({ productId }: { productId: string }) {
  return <Button size='icon' className=""><FaHeart/></Button>;
}

export default FavoritesToggleButton;
