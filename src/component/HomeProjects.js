import React from "react";
import projectData from "../utils/projectData";

const HomeProjects = () => {
  return (
    <>
      <div className="w-full bg-slate-100 flex flex-col gap-4 p-5">
        {projectData.map((element, index) => (
          <div key={index} className="flex flex-row justify-around gap-4 p-5">
            <div className="flex flex-col justify-between items-center ">
              <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-500">
                {element.projectName}
              </h1>
              <p className="font-semibold py-4">{element.projectDetails}</p>
              <div className="p-2 bg-gradient-to-r from-blue-400 via-red-400 to-green-400 rounded-full animate-rotate-left-to-right">
                <button
                  onClick={element.handelLink}
                  className="p-4 bg-green-800 text-xl rounded-full text-white animate-rotate-right-to-left"
                >
                  GO
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
      </div>
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
