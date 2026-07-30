import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { projects, projectCategories, siteInfo } from "../const/index";
import { ProjectCard, ProjectModal } from "../components/projects";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  useDocumentMeta(
    "Portfolio — Bauzytech | Web & Mobile App Projects",
    "Browse Bauzytech's portfolio of full-stack web apps, mobile apps, and software projects — including an NGO donation platform, a weather PWA, and a service marketplace.",
  );

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Navbar />

      <main className="min-h-screen px-6 xl:px-16 pt-32 pb-24 relative overflow-hidden">
        {/* Background watermark */}
        <div className="absolute right-8 top-8 text-[160px] font-black text-white opacity-[0.02] select-none pointer-events-none leading-none">
          ALL
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Return button — TOP */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-600 hover:text-amber-400 transition-colors duration-200 mb-10 cursor-pointer"
          >
            ← Back to Home
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
          >
            <div>
              <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
                Selected Work
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Portfolio
              </h1>
              <div className="w-16 h-1 bg-amber-400 mt-4" />
              <p className="text-gray-500 text-sm mt-4 max-w-md">
                A curated selection below. For the full history of everything
                built, browse the GitHub profile.
              </p>
            </div>

            <a
              href={siteInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-700 text-white px-6 py-3 font-black tracking-widest uppercase text-xs hover:border-amber-400 hover:text-amber-400 transition-all duration-300 self-start"
            >
              <FaGithub size={16} />
              View GitHub
            </a>
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-4"
          >
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 text-xs font-black tracking-widest uppercase border transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-amber-400 text-black border-amber-400"
                    : "bg-transparent text-gray-500 border-gray-800 hover:border-amber-400 hover:text-amber-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Results count */}
          <p className="text-gray-700 text-xs tracking-widest uppercase mb-12">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            {activeFilter !== "All" ? ` — ${activeFilter}` : ""}
          </p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-2 "
            >
              {filtered.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={setSelectedProject}
                />
              ))}
            </motion.div>
          ) : (
            <div className="border border-gray-800 py-24 text-center">
              <p className="text-white font-black text-xl">Nothing here yet.</p>
              <p className="text-gray-600 text-sm mt-2">Check back soon.</p>
            </div>
          )}

          {/* Return button — BOTTOM */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-600 hover:text-amber-400 transition-colors duration-200 mt-16 cursor-pointer mx-auto"
          >
            ← Back to Home
          </motion.button>
        </div>
      </main>

      <Footer />

      {/* Modal — outside main, overlays everything */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default ProjectsPage;
