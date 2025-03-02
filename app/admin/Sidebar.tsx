"use client";
import { adminLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

function Sidebar() {
  const pathname = usePathname();
  return (
    <aside>
      {adminLinks.map((link) => {
        const isActivePage = pathname === link.href;
        const variant = isActivePage ? "default" : "ghost";
        return (
          <div className="" key={link.href}>
            <Button
              asChild
              className="mb-2 capitalize font-normal grid grid-cols-1 ml-2 "
              variant={variant}
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          </div>
        );
      })}
    </aside>
  );
}

export default Sidebar;
