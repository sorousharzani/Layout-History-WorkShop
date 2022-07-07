import { ComponentConstructor } from "../types";
import { Context, ReactNode, useState } from "react";
import { SiteContextSetter } from "./siteContext";

interface SiteProps<TNavbar extends Record<string, unknown>> {
  children: ReactNode;
  Navbar: { componet: ComponentConstructor<TNavbar>; initalProps: TNavbar };
  siteContext: Context<SiteContextSetter<TNavbar>>;
}
const Site = <TNavbar extends Record<string, unknown>>({
  children,
  Navbar,
  siteContext
}: SiteProps<TNavbar>) => {
  const [navbarProps, setNavbarProps] = useState<TNavbar>(Navbar.initalProps);

  return (
    <siteContext.Provider value={{ setNavbarProps }}>
      <Navbar.componet {...navbarProps} />
      {children}
    </siteContext.Provider>
  );
};

export default Site;
