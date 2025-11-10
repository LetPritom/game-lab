import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";
import slider5 from "../assets/slider5.jpg";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
    );
  };

  const images = [slider1, slider2, slider3, slider4, slider5];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5, filter: "brightness(1)" },
    left1: { x: "-50%", scale: 0.8, zIndex: 2, filter: "brightness(0.6)" },
    left: { x: "-90%", scale: 0.6, zIndex: 1, filter: "brightness(0.4)" },
    right: { x: "90%", scale: 0.8, zIndex: 2, filter: "brightness(0.4)" },
    right1: { x: "50%", scale: 0.9, zIndex: 3, filter: "brightness(0.6)" },
  };

   useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // 3s por por change hobe

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-black h-[90vh] container gap-1 w-11/12 mx-auto px-4 sm:px-8">
      <div className=" w-full flex justify-center items-center relative h-[400px]  ">
        {images.map((image, index) => {
          return (
            <motion.img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="rounded-xl absolute w-[70vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] bg-black/80 border-2 border-yellow-500 shadow-[0_0_20px_rgba(255,255,0,0.6)] 
                       hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,0,0.8)] transition-all duration-300 "
              initial="center"
              animate={positions[positionIndexes[index]]}
              variants={imageVariants}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{
                width: "40%",
                border: "",
              }}
            />
          );
        })}
      </div>

      {/* 👇 Button ta map er div er baire */}

      <button
        onClick={handleNext}
        className="mt-2 px-6 py-3 rounded-lg font-bold text-yellow-500 bg-yellow-400 
                 hover:bg-yellow-500 hover:scale-105 transition-all duration-300 
                  shadow-[0_0_15px_rgba(255,255,0,0.6)] border-2 border-yellow-500 
                  active:scale-95 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
