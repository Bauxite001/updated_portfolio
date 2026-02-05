import { icons } from "../const/index";

const Icons = () => {
  return (
    <section>
      <div className=" bg-gray-700 w-screen mt-12">
        <div className="scroll-icons flex gap-8 md:gap-12 xl:gap-16 ">
          {icons.map((icon, i) => (
            <img
              key={i}
              src={icon.imagePath}
              alt="${icon}"
              className="size-20"
            />
          ))}

          {icons.map((icon, i) => (
            <img
              key={i}
              src={icon.imagePath}
              alt="${icon}"
              className="size-20"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Icons;
