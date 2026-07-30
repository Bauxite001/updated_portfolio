import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/homepage";
import ProjectsPage from "./page/ProjectsPage";
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
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>

      {/* Floating widgets — visible on every page */}
      <WhatsAppButton />
      <VirtualAssistant />
    </BrowserRouter>
  );
};

export default App;
