"use client";

import Image from "next/image";
import { useState } from "react";

const ProductGallery = ({ productImages }) => {
  const [activeImage, setActiveImage] = useState(1);
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="relative col-span-3 row-span-2 min-h-[20rem]">
        <Image
          src={
            productImages.filter((product) => product.id === activeImage)[0]
              .imageSrc
          }
          alt="Logo"
          priority
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          fill
        />
      </div>
      {productImages.map((product) => {
        return (
          <div
            className={`relative col-span-1 h-36 cursor-pointer ${
              activeImage === product.id && "border-4 border-chestnutRose"
            }`}
            key={product.id}
            onClick={() => setActiveImage(product.id)}
          >
            <Image
              src={product.imageSrc}
              alt="Logo"
              priority
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              fill
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductGallery;
