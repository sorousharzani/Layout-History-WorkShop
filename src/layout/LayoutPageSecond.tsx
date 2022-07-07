import { useContext } from "react";
import { siteContext } from "../site/siteContext";
import { LayoutComponent, LayoutConfigPage } from "../types";

const LayoutPageSecond: LayoutConfigPage = () => {
  return (
    <div className="App">
      <h1>I am the Config Page</h1>
    </div>
  );
};

const LayoutPageSecondNavbar: LayoutComponent = () => {
  return <>IM NAVBAR</>;
};
LayoutPageSecondNavbar.initialDimensions = { height: 80 };

LayoutPageSecond.layoutConfig = { navbar: <LayoutPageSecondNavbar /> };

export default LayoutPageSecond;
