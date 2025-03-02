"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function SonnerDemo() {
  return (
    <Button variant="outline" onClick={() => toast("Event has been created")}>
      
    </Button>
  );
}
