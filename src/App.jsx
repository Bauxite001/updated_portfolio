import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Exp } from "./components/exp";
import Icons from "./components/icons";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Exp />
      <Icons />
    </>
  );
};

export default App;
