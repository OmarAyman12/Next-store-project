import { Separator } from "@radix-ui/react-dropdown-menu";

import React from "react";
import Sidebar from "./Sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="m-3 border-b">Dashboard</h2>
      <Separator />
      <section>
        <div>
          <Sidebar />
          <div>{children}</div>
        </div>
      </section>
    </>
  );
}

export default DashboardLayout;
