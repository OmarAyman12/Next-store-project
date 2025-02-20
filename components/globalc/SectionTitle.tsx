import React from "react";
import { Separator } from "../ui/separator";

function SectionTitle({ text }: { text: string }) {
  return (
    <div>
      <h2>{text}</h2>
      <Separator />
    </div>
  );
}

export default SectionTitle;
