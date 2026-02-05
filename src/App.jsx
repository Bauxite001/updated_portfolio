import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Exp } from "./components/exp";
import Icons from "./components/icons";
import { Projects } from "./components/projects";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Exp />
      <Projects />
      <Icons />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
