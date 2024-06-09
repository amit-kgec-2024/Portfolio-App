import React, { useEffect, useState } from "react";
import coreProects from "../utils/coreProjects";
import { FaExternalLinkAlt } from "react-icons/fa";
import Loader from "./Loader";

const HomeProjects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? <Loader/> : <div className="w-full bg-slate-100 flex flex-col gap-4 p-5">
        {coreProects.map((element, index) => (
          <div key={index} className="flex flex-row-reverse justify-around gap-8 p-5 shadow bg-dark6 text-white">
            <div className="flex flex-col justify-around items-center ">
              <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-500">
                {element.projectName}
              </h1>
              <p className="font-semibold py-4">{element.projectDetails}</p>
              <div className="p-1 border-8 border-l-green-400 border-b-indigo-400 border-r-red-400 border-t-fuchsia-400 rounded-full animate-rotate-left-to-right">
                <button
                  onClick={()=> window.open(`${element.linksProject}`, "_blank")}
                  className="p-3 text-xl font-bold rounded-full text-white animate-rotate-right-to-left"
                >
                  <FaExternalLinkAlt/>
                </button>
              </div>
            </div>
            <div className="w-[80%] h-[80%]">
              <img
                src={element.projectImg}
                width={1000}
                height={1000}
                alt="Bird"
              />
            </div>
          </div>
        ))}
      </div>}
      <style>
        {`
        .animate-rotate-left-to-right {
    animation: rotate-left-to-right 4s linear infinite;
}
.animate-rotate-right-to-left {
    animation: rotate-right-to-left 4s linear infinite;
}

@keyframes rotate-left-to-right {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes rotate-right-to-left {
    0% {
        transform: rotate(360deg);
    }

    100% {
        transform: rotate(0deg);
    }
}
    /* Animation for increasing text size */
.animate-text-small-to-big {
    animation: text-small-to-big 4s linear infinite;
}

/* Animation for decreasing text size */
.animate-text-big-to-small {
    animation: text-big-to-small 4s linear infinite;
}

@keyframes text-small-to-big {
    0% {
        font-size: 10px;
    }

    100% {
        font-size: 50px;
    }
}

@keyframes text-big-to-small {
    0% {
        font-size: 50px;
    }

    100% {
        font-size: 10px;
    }
}
        `}
      </style>
    </>
  );
};

export default HomeProjects;
