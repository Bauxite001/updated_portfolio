import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Exp } from "./components/exp";
import Icons from "./components/icons";
import { Projects } from "./components/projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Exp />
      <Projects />
      <Icons />
    </>
  );
};

export default App;
