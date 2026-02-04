export const About = () => {
  return (
    <section id="about" className="px-6 md:px-12 my-16 md:my-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          About Me
        </h2>

        <div className="bg-gray-800 rounded-2xl p-10 md:p-16 shadow-lg">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            I’m <span className="font-semibold text-white">Agbo Moses</span>, a
            web developer and founder of{" "}
            <span className="font-semibold text-white">Bauzy Tech</span>. I
            specialize in building responsive, high-performance, and
            user-focused web interfaces with modern tools. My passions include{" "}
            <span className="font-medium text-yellow-400">
              JavaScript, Python, Cloud technologies, and Cybersecurity
            </span>
            , and I constantly enhance my skills through hands-on projects and
            structured learning. I aim to become a well-rounded developer
            capable of delivering scalable solutions, focusing on clean code,
            optimal performance, and outstanding user experience. I’m always
            seeking opportunities to contribute, grow, and create digital
            products that solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};
