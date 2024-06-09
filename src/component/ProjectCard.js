import React from 'react'
import { LuMoveUpRight } from "react-icons/lu";

const ProjectCard = ({linksProject, projectName, projectImg, projectDetails}) => {
    const handelLink = () => {
      window.open(`${linksProject}`, "_blank");
    };
  return (
    <>
      <div className="shadow-2xl flex flex-col justify-around p-4 rounded-md border">
        <div className="w-[100%] overflow-hidden">
          <img src={projectImg} alt="Bird"/>
        </div>
        <p className="font-semibold py-4">{projectDetails}</p>
        <div className="flex flex-row justify-between items-center py-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase shadow text-transparent bg-clip-text bg-gradient-to-b from-pink-400 to-green-400">
            {projectName}
          </h1>
          <button
            onClick={handelLink}
            className="w-16 h-16 items-center justify-center flex bg-green-800 rounded-full text-white shadow-xl"
          >
            <LuMoveUpRight className="animate-text-small-to-big" />
          </button>
        </div>
      </div>
      <style>{`
.animate-text-small-to-big {
    animation: text-small-to-big 2s linear infinite;
}

@keyframes text-small-to-big {
    0% {
        font-size: 10px;
    }
    25% {
        font-size: 15px;
    }
    50% {
        font-size: 20px;
    }
    75% {
        font-size: 25px;
    }

    100% {
        font-size: 30px;
    }
}
    `}</style>
    </>
  );
}

export default ProjectCard
