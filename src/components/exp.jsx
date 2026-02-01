import { counterItems } from "../const";

export const Exp = () => {
  return (
    <div className=" grid grid-cols-4 gap-18 mt-12 mb-2 px-12 ">
      {counterItems.map((item) => (
        <div
          key={item.value}
          className="bg-gray-800 px-12 pr-10 py-6 rounded text-white"
        >
          <p className="text-4xl font-bold">
            {item.value} <span>{item.suffix}</span>
          </p>
          <p className="text-sm">{item.label}</p>
        </div>
      ))}
    </div>
  );
};
