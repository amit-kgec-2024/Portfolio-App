import React, { useState, useEffect } from "react";
import AnimateSvg from "../assets/AnimateSvg";

const Loader = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="w-full h-screen absolute top-0 left-0 z-50 flex items-center justify-center bg-dark2">
        <div
          className={`animate-image ${showFirstImage ? "fade-in" : "fade-out"}`}
        >
          <AnimateSvg className="imageone" />
        </div>
        <div
          className={`animate-image ${showFirstImage ? "fade-out" : "fade-in"}`}
        >
          <img
            src="tiger.svg"
            alt="Tiger"
            width={300}
            height={300}
            className="imagetwo"
          />
        </div>
      </div>
      <style>{`
        .animate-image {
          position: absolute;
          transition: opacity 1s ease-in-out;
        }

        .fade-in {
          opacity: 1;
        }

        .fade-out {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Loader;
