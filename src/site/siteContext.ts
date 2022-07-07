import { createContext, Dispatch, SetStateAction } from "react";

export type CustomNavbar = {
  title: string;
};

export interface SiteContextSetter<TNavbar extends Record<string, unknown>> {
  setNavbarProps: (value: TNavbar) => void;
}

const initalSiteContext: SiteContextSetter<CustomNavbar> = {
  setNavbarProps: () => {}
};

export const siteContext = createContext<SiteContextSetter<CustomNavbar>>(
  initalSiteContext
);
