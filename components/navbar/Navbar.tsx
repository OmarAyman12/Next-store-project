import React from "react";
import Container from "../globalc/Container";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinkDropDown from "./LinkDropDown";
import { Suspense } from "react";
import LoadingContainer from "../globalc/LoadingContainer";

function Navbar({ isAdmin }: { isAdmin: boolean }) {
  return (
    <nav className="">
      <Container className="flex flex-row px-2 py-4 border-b">
        <Logo />
        <Suspense fallback={<LoadingContainer />}>
          <NavSearch />
        </Suspense>
        <div className="mr-8 flex gap-x-1">
          <CartButton />
          <DarkMode />
          <LinkDropDown isAdmin={isAdmin} />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
