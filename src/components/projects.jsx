import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../const/index";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      variants={fadeUp}
      onClick={() => onClick(project)}
      className="group flex flex-col bg-black border border-gray-800 hover:border-amber-400 transition-all duration-300 overflow-hidden relative cursor-pointer"
    >
      {/* Image */}
      <div className="overflow-hidden h-52 bg-gray-900 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity duration-300" />
        <div className="absolute top-3 left-3">
          <span className="text-xs font-black tracking-widest uppercase bg-black border border-gray-700 text-amber-400 px-3 py-1">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <h3 className="text-white font-black text-xl leading-snug group-hover:text-amber-400 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-500 border border-gray-800 group-hover:border-gray-600 px-3 py-1 rounded-sm transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto pt-2 border-t border-gray-800 items-center justify-between">
          <span className="text-xs text-gray-600 uppercase tracking-widest font-bold group-hover:text-amber-400 transition-colors duration-200">
            View Details →
          </span>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-sm font-black text-amber-400 hover:text-amber-300 transition-colors duration-200"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-x-4 top-8 bottom-8 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-3xl z-50 overflow-y-auto bg-black border border-gray-800"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-gray-500 hover:text-amber-400 transition-colors duration-200 font-black text-xl cursor-pointer"
            >
              ✕
            </button>

            {/* Image */}
            <div className="h-56 md:h-72 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)",
                }}
              />
              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="text-xs font-black tracking-widest uppercase bg-black border border-gray-700 text-amber-400 px-3 py-1">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 md:p-10 space-y-8">
              {/* Title + links */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
                  {project.title}
                </h2>
                <div className="flex gap-3 shrink-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-black tracking-widest uppercase border border-amber-400 text-amber-400 px-4 py-2 hover:bg-amber-400 hover:text-black transition-all duration-200"
                    >
                      Live Site ↗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-black tracking-widest uppercase border border-gray-700 text-gray-400 px-4 py-2 hover:border-white hover:text-white transition-all duration-200"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-base leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="space-y-3">
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-amber-400">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-400 border border-gray-800 px-3 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key features */}
              {project.features && (
                <div className="space-y-3">
                  <p className="text-xs font-bold tracking-[0.3em] uppercase text-amber-400">
                    Key Features
                  </p>
                  <div className="space-y-2">
                    {project.features.map((f, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <span className="text-amber-400 mt-1 shrink-0">→</span>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {f}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Problem / Solution */}
              {project.problem && project.solution && (
                <div className="grid sm:grid-cols-2 gap-px bg-gray-800">
                  <div className="bg-black p-6 space-y-2">
                    <p className="text-xs font-bold tracking-[0.3em] uppercase text-gray-600">
                      Problem
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div className="bg-black p-6 space-y-2">
                    <p className="text-xs font-bold tracking-[0.3em] uppercase text-amber-400">
                      Solution
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <section
        id="project"
        className="px-6 xl:px-16 py-24 relative overflow-hidden"
      >
        {/* Top edge line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* Background watermark */}
        <div className="absolute right-8 top-8 text-[160px] font-black text-white opacity-[0.02] select-none pointer-events-none leading-none">
          03
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6"
          >
            <div>
              <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
                Selected Work
              </p>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                My Projects
              </h2>
              <div className="w-16 h-1 bg-amber-400 mt-4" />
            </div>
            <Link
              to="/projects"
              className="text-gray-400 hover:text-amber-400 font-semibold text-sm tracking-widest uppercase transition-colors duration-200 self-start sm:self-auto"
            >
              View All →
            </Link>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-2"
          >
            {featured.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelectedProject}
              />
            ))}
          </motion.div>

          {/* Show More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="border border-gray-700 text-white px-12 py-4 font-black tracking-widest uppercase text-sm hover:border-amber-400 hover:text-amber-400 transition-all duration-300 cursor-pointer"
              >
                Show More Projects
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Bottom edge line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </section>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
