import "./styles.css";
import Site from "./site/site";
import NavbarDesktop from "./site/components/navbar";
import Page from "./page/page";
import Page2 from "./page/secondPage";
import { siteContext } from "./site/siteContext";
import { ReactNode, useMemo, useState } from "react";
import OldSite from "./oldSite/oldSite";
import { ComponentConstructor, LayoutConfigPage, LayoutPage } from "./types";
import LayoutPageFirst from "./layout/LayoutPageFirst";
import LayoutPageSecond from "./layout/LayoutPageSecond";

const OldSiteLayout = () => {
  const [step, setStep] = useState(0);

  const Navbar = useMemo(() => {
    if (step === 0) {
      return <>im Navbar 1</>;
    }

    return <>Im Navbar2 </>;
  }, [step]);

  return (
    <OldSite Navbar={Navbar} Footer={<>Im Footer</>}>
      <div className="App">
        {step === 0 && <Page />}
        {step === 1 && <Page2 />}
      </div>
      <button onClick={() => setStep(0)}>go to first page</button>
      <button onClick={() => setStep(1)}>go to second page</button>
    </OldSite>
  );
};

const CurrentSite = () => {
  const [step, setStep] = useState(0);
  return (
    <Site
      Navbar={{ componet: NavbarDesktop, initalProps: { title: "hi" } }}
      siteContext={siteContext}
    >
      <div className="App">
        {step === 0 && <Page />}
        {step === 1 && <Page2 />}
      </div>
      <button onClick={() => setStep(0)}>go to first page</button>
      <button onClick={() => setStep(1)}>go to second page</button>
    </Site>
  );
};

interface LayoutProps {
  Component: LayoutPage;
}
const LayoutApp = ({ Component }: LayoutProps) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component />);
};

interface LayoutConfigApp {
  Component: LayoutConfigPage;
}
const LayoutConfigApp = ({ Component }: LayoutConfigApp) => {
  const Navbar = Component.layoutConfig.navbar;
  const height = Navbar.type.initialDimensions.height;

  return (
    <>
      {Navbar}
      <Component />
      the height of the Navbar is {height}
    </>
  );
};

export default function App() {
  return <LayoutConfigApp Component={LayoutPageSecond} />;
}
