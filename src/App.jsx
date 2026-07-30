import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/homepage";
import AboutPage from "./page/AboutPage";
import ServicesPage from "./page/ServicesPage";
import ProjectsPage from "./page/ProjectsPage";
import ContactPage from "./page/ContactPage";
import PricingPage from "./page/PricingPage";
import { ScrollToTop } from "./components/scrollToTop";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { VirtualAssistant } from "./components/VirtualAssistant";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        {/* Backward-compat: old /projects links keep working */}
        <Route path="/projects" element={<Navigate to="/portfolio" replace />} />
      </Routes>

      {/* Floating widgets — visible on every page */}
      <WhatsAppButton />
      <VirtualAssistant />
    </BrowserRouter>
  );
};

export default App;
