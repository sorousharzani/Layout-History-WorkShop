import { ComponentConstructor } from "../types";
import { Context, ReactNode, useState } from "react";

interface SiteProps<TNavbar extends Record<string, unknown>> {
  children: ReactNode;
  Navbar?: ReactNode;
  Footer?: ReactNode;
}
const Site = <TNavbar extends Record<string, unknown>>({
  children,
  Navbar,
  Footer
}: SiteProps<TNavbar>) => {
  return (
    <>
      {Navbar}
      {children}
      {Footer}
    </>
  );
};

export default Site;
