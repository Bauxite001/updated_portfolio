import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const first1 = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      first1.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: first1.current,
          start: "top 80%",
          markers: true,
        },
      },
    );
  }, []);

  return (
    <section className="my-32 flex space-x-12 px-12 ">
      <div ref={first1} className="w-3/5">
        <img
          src="/images/project1.png"
          alt=""
          className="h-[70vh] w-full object-cover object-top"
        />
        <p>
          An e-commerce site for a small business, allowing customers to browse
          products, add to cart, and check out quickly — all with a clean,
          modern design.
        </p>
      </div>
      <div className="w-2/5 space-y-18">
        <div className="bg-amber-300 rounded">
          <img
            src="/images/project1.png"
            alt=""
            className="h-[30vh] w-[90%] object-cover object-top"
          />
        </div>
        <div className="bg-amber-300 rounded h-[32vh] flex items-center justify-center">
          <img
            src="/images/project1.png"
            alt=""
            className="h-[30vh] w-[90%] object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};
