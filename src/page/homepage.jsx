import { Hero } from "../components/hero";
import { Navbar } from "../components/navbar";
import { ServicesTeaser } from "../components/ServicesTeaser";
import Icons from "../components/icons";
import { Projects } from "../components/projects";
import { AboutTeaser } from "../components/AboutTeaser";
import { ContactCTA } from "../components/ContactCTA";
import { Footer } from "../components/footer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const Home = () => {
  useDocumentMeta(
    "Bauzytech — Senior Full-Stack Web & Mobile App Development",
    "Bauzytech is a senior full-stack web & mobile app development studio in Abuja, Nigeria, building React/Node.js applications, secure APIs, and data-driven products for clients worldwide.",
  );

  return (
    <>
      <Navbar />
      <Hero />
      <ServicesTeaser />
      <Projects />
      <Icons />
      <AboutTeaser />
      <ContactCTA />
      <Footer />
    </>
  );
};

export default Home;
