import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/homepage";
import ProjectsPage from "./page/ProjectsPage";
import { ScrollToTop } from "./components/scrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
