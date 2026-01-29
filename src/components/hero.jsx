import { words } from "../const/index";
export const Hero = () => {
  return (
    <main className="flex h-screen bg-[url('/New/1.jpg')]">
      {/* Left image */}
      <div className="w-2/5 overflow-hidden">
        <img
          src="/New/cube.png"
          alt="pc"
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Right hero text */}
      <div className="w-3/5 flex flex-col-center justify-center p-8 ">
        <h1 className="text-4xl font-bold">
          Shaping{" "}
          <span className="overflow-hidden inline-block">
            {words.map((word) => (
              <span className=" flex " key={word.text}>
                <span className="">{word.text}</span>
              </span>
            ))}
          </span>
          ,
        </h1>
        <h1 className="text-4xl font-bold"> into Real Projects</h1>{" "}
        <h1 className="text-4xl font-bold">that Deliver Results</h1>
        <p>
          Hi, I’m Agbo Moses — a web and software developer specializing in
          Python, secure coding, and building projects that actually work. I
          turn concepts into real, reliable, and impactful solutions.
        </p>
      </div>
    </main>
  );
};
