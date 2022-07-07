import { useContext } from "react";
import { siteContext } from "../site/siteContext";

export default function Page() {
  const { setNavbarProps } = useContext(siteContext);

  return (
    <div className="App">
      <h1>I am the First Page</h1>
      <h2>type Something in the Input to change the Text in NavBar</h2>
      <input
        type="text"
        onChange={(e) => setNavbarProps({ title: e.target.value })}
      />
    </div>
  );
}
