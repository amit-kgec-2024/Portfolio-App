import React from 'react'
import { LuMoveUpRight } from "react-icons/lu";

const ProjectCard = ({linksProject, projectName, projectImg, projectDetails}) => {
    const handelLink = () => {
      window.open(`${linksProject}`, "_blank");
    };
  return (
    <div>
      <div className="">
        <img src={projectImg} alt="Bird" />
      </div>
      <p className="font-semibold py-4">{projectDetails}</p>
      <div className="flex flex-row justify-between py-6">
        <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold uppercase">
          {projectName}
        </h1>
        <button
          onClick={handelLink}
          className="p-5 bg-green-800 text-2xl rounded-full text-white"
        >
          <LuMoveUpRight />
        </button>
      </div>
    </div>
  );
}

export default ProjectCard
