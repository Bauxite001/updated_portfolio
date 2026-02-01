import { words } from "../const/index";
export const Hero = () => {
  return (
    <main className="flex flex-row-center mt-20 px-12 ">
      {/* Left image */}
      <div className="w-3/5 justify-center p-8 space-y-10">
        <h1 className="text-6xl font-bold flex items-center">
          Shaping
          <span className="overflow-hidden ml-4 h-14 translate-y-0 ">
            <span className="wrapper">
              {words.map((word) => (
                <span className=" flex " key={word.text}>
                  <span className="flex items-center gap-1">
                    <img
                      src={word.imgPath}
                      alt={word.text}
                      className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white"
                    />
                    {word.text}
                  </span>
                </span>
              ))}
            </span>
          </span>
        </h1>
        <h1 className="text-6xl font-bold"> into Real Projects</h1>{" "}
        <h1 className="text-6xl font-bold">that Deliver Results</h1>
        <p className="text-2xl text-blue-100">
          Hi, I’m Agbo, a developer with passion for Code.
          {/* Python, secure coding, and building projects that actually work. I
          turn concepts into real, reliable, and impactful solutions. */}
        </p>
        <button className="bg-gray-800 px-8 py-4 rounded hover:bg-amber-50 hover:text-black duration-200 transition-all cursor-pointer">
          <p>SEE MY WORK</p>
        </button>
      </div>

      {/* Right */}
      <div className="w-2/5 overflow-hidden">
        <img
          src="/New/pc.png"
          alt="pc"
          className="w-full h-[70%] object-cover rounded"
        />
      </div>
    </main>
  );
};
