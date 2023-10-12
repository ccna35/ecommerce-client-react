import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    buttonText: "Shop Now",
    imageSrc: "/carousel/nike-black.png",
  },
  {
    id: 2,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    buttonText: "Shop Now",
    imageSrc: "/carousel/flash-4.webp",
  },
  {
    id: 3,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    buttonText: "Shop Now",
    imageSrc: "/carousel/32.webp",
  },
  {
    id: 4,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    buttonText: "Shop Now",
    imageSrc: "/carousel/9.webp",
  },
  {
    id: 5,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    buttonText: "Shop Now",
    imageSrc: "/carousel/flash-3.webp",
  },
];

export default function DefaultCarousel() {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeSlide === 5) {
        setActiveSlide(1);
      } else {
        setActiveSlide((prev) => prev + 1);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [activeSlide]);

  return (
    <div className="w-full min-h-[30rem] py-8">
      <div className="flex">
        {products.map((item) => {
          return (
            <div
              className={`w-full h-full grid-cols-1 md:grid-cols-2 ${
                activeSlide === item.id ? "grid" : "hidden"
              }`}
              key={item.id}
            >
              <div className="text-left flex flex-col justify-center gap-8 items-start">
                <h2 className="font-bold text-4xl md:text-5xl text-mainColor">
                  {item.title}
                </h2>
                <p className="text-slate-700">{item.desc}</p>
                <button className="py-2 px-4 bg-chestnutRose text-white rounded-sm hover:bg-red-400">
                  {item.buttonText}
                </button>
              </div>
              <div className="relative h-96">
                <img
                  src={item.imageSrc}
                  alt="carousel item"
                  className="absolute w-full h-full object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="indicators flex gap-4 items-center justify-center mt-4">
        {products.map((item) => {
          return (
            <span
              className={`p-2 block w-4 h-4 bg-slate-300 rounded-full cursor-pointer hover:bg-slate-400 ${
                activeSlide === item.id && "ring-2 ring-slate-600"
              }`}
              onClick={() => setActiveSlide(item.id)}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
