import { counterItems } from "../const";

export const Exp = () => {
  return (
    <div className=" grid md:grid-cols-2 xl:md:grid-cols-4 gap-6 md:gap-18 mt-12 mb-2 px-6 md:px-12 ">
      {counterItems.map((item) => (
        <div
          key={item.value}
          className="bg-gray-800 px-12 pr-10 py-6 rounded text-white"
        >
          <p className="text-4xl font-bold">
            {item.value} <span>{item.suffix}</span>
          </p>
          <p className="text-md">{item.label}</p>
        </div>
      ))}
    </div>
  );
};
