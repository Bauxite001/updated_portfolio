import { Hero } from "../components/hero";
import { Navbar } from "../components/navbar";
import { WhatIDo } from "../components/WhatIDo";
import Icons from "../components/icons";
import { Projects } from "../components/projects";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatIDo />
      <Projects />
      <Icons />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
