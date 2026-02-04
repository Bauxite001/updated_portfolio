import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-animate", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-6 md:px-12 my-16 md:my-32"
      id="project"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center md:text-left">
        My Projects
      </h2>

      <div className="flex flex-col xl:flex-row gap-12">
        {/* BIG FEATURED PROJECT */}
        <div className="project-animate flex-1 space-y-4">
          <img
            src="/images/project1.png"
            alt="Project preview"
            className="w-full h-[280px] md:h-[420px] object-cover rounded-xl shadow-lg"
          />
          <p className="text-gray-300 text-base md:text-lg">
            <span className="font-semibold">E-Commerce Website:</span> A clean,
            modern site for a small business, allowing customers to browse
            products, add items to cart, and check out seamlessly.
          </p>
        </div>

        {/* SMALL GRID PROJECTS */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          <div className="project-animate rounded-xl overflow-hidden bg-gray-800 hover:scale-105 transition-transform duration-300 shadow-md">
            <img
              src="/images/project5.png"
              alt="Simple e-commerce site"
              className="w-full h-[160px] md:h-[200px] object-cover"
            />
            <p className="p-2 text-gray-200 text-sm md:text-base">
              Simple E-Commerce Site
            </p>
          </div>

          <div className="project-animate rounded-xl overflow-hidden bg-yellow-400 hover:scale-105 transition-transform duration-300 shadow-md">
            <img
              src="/images/project6.png"
              alt="Landing page project"
              className="w-full h-[160px] md:h-[200px] object-contain p-2"
            />
            <p className="p-2 text-black text-sm md:text-base">
              Clean & Minimal Landing Page
            </p>
          </div>

          <div className="project-animate rounded-xl overflow-hidden col-span-2 bg-gray-800 hover:scale-105 transition-transform duration-300 shadow-md">
            <img
              src="/images/project7.png"
              alt="Portfolio project"
              className="w-full h-[160px] md:h-[200px] object-cover"
            />
            <p className="p-2 text-gray-200 text-sm md:text-base">
              My First Portfolio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
