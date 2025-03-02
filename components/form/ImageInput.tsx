import { Label } from "../ui/label";
import { Input } from "../ui/input";

import React from "react";

function ImageInput() {
  const name = "image";
  return (
    <div>
      <Label htmlFor={name} className="capitalize">Image</Label>
      <Input type='file' name={name} id={name} required accept="image/*"/>
    </div>
  );
}

export default ImageInput;
