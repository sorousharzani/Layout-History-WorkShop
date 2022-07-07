import { useContext } from "react";
import { siteContext } from "../site/siteContext";
import { LayoutComponent } from "../types";

const LayoutPageFirst: LayoutComponent = () => {
  return (
    <div className="App">
      <h1>Hi Im Navbar</h1>
    </div>
  );
};

LayoutPageFirst.initialDimensions = { height: 80 };

export default LayoutPageFirst;
