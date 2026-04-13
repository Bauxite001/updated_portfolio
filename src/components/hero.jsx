import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { words } from "../const/index";

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.5 + 0.5;
        this.alpha = Math.random() * 0.4 + 0.1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(251, 191, 36, ${this.alpha})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 90; i++) particles.push(new Particle());

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(251, 191, 36, ${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      connectParticles();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Particle background */}
      <ParticleCanvas />

      {/* Radial amber glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, rgba(251,191,36,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(251,191,36,1) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orb top right */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Glowing orb bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col xl:flex-row items-center px-6 xl:px-16 pt-28 pb-20 gap-12 xl:gap-0">
        {/* Left */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="w-full xl:w-3/5 space-y-6"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 bg-gray-900 border border-gray-700 text-amber-400 text-xs font-semibold px-4 py-2 rounded-full tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Available for remote work
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeUp} className="space-y-1">
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-black leading-tight tracking-tight text-white flex items-center flex-wrap gap-y-2">
              Shaping
              <span className="overflow-hidden ml-4 h-10 md:h-16 xl:h-20">
                <span className="wrapper">
                  {words.map((word, i) => (
                    <span className="flex" key={i}>
                      <span className="flex items-center gap-2">
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-14 md:size-12 size-8 p-1.5 rounded-full bg-white"
                        />
                        <span className="text-amber-400">{word.text}</span>
                      </span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-black leading-tight tracking-tight text-white">
              into Real Projects
            </h1>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-black leading-tight tracking-tight text-white">
              that Deliver <span className="text-amber-400">Results</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl"
          >
            I'm <span className="text-white font-semibold">Moses Agbo</span>,
            founder of{" "}
            <span className="text-amber-400 font-semibold">Bauzytech</span> — a
            full-stack developer building performant web apps, data-driven
            tools, and security-aware systems. From frontend to backend, QA to
            AI data work, I cover the full product lifecycle.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 pt-2"
          >
            <a href="#project">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="bg-amber-400 text-black px-8 py-4 w-full sm:w-fit rounded font-black hover:bg-amber-300 duration-200 transition-all cursor-pointer tracking-wide"
              >
                SEE MY WORK
              </motion.button>
            </a>
            <a href="#about">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="bg-transparent border border-gray-600 text-white px-8 py-4 w-full sm:w-fit rounded hover:border-amber-400 hover:text-amber-400 duration-200 transition-all cursor-pointer"
              >
                ABOUT ME
              </motion.button>
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            className="flex gap-8 pt-4 border-t border-gray-800"
          >
            {[
              { value: "3+", label: "Live Projects" },
              { value: "5+", label: "Roles Covered" },
              { value: "1", label: "Brand — Bauzytech" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-black text-amber-400">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — floating stack card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="w-full xl:w-2/5 flex justify-center xl:justify-end"
        >
          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl w-full max-w-md">
              <img
                src="/New/pc.png"
                alt="Bauzytech workspace"
                className="w-full object-cover"
              />
              {/* Image overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Floating badge — top left */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 shadow-xl"
            >
              <div className="text-xs text-gray-400 mb-1">Current Stack</div>
              <div className="text-white text-sm font-semibold">
                React · Node · Supabase
              </div>
            </motion.div>

            {/* Floating badge — bottom right */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-4 -right-4 bg-amber-400 text-black rounded-xl px-4 py-3 shadow-xl"
            >
              <div className="text-xs font-semibold mb-1">Open to work</div>
              <div className="text-sm font-black">Remote · Worldwide</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mt-6"
      >
        <span className="text-gray-600 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-amber-400 to-transparent"
        />
      </motion.div>
    </section>
  );
};
