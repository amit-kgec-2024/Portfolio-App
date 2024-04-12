import React, { useState } from 'react'
import { BsFilterRight } from 'react-icons/bs';
import App from '../../App';
import ProjectCard from '../ProjectCard';
import ProjcetData from '../../utils/projectData'

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)
  const handelProjectClick = (toggleProject)=>{
    setActiveProject(toggleProject);
  }
  return (
    <div>
      <div
        className={`bg-teal-100 w-full ${
          activeProject ? "hidden" : ""
        }`}
      >
        <div className="flex flex-row justify-between items-center p-4">
          <p className="navigation-button text-xl text-end py-3 font-bold text-whit">
            Portfolio.
          </p>
          <button
            className="navigation-button my-4 mx-4 text-3xl"
            onClick={() => handelProjectClick("home")}
          >
            <BsFilterRight />
          </button>
        </div>
        <div className="grid sm:grid-cols-2 gap-10 px-5 sm:px-16 justify-between">
          {ProjcetData.slice().reverse().map((ele)=>(
            <ProjectCard 
            key={ele}
            projectImg={ele.projectImg}
            projectName={ele.projectName}
            linksProject={ele.linksProject}
            projectDetails={ele.projectDetails}
            />

          ))}
        </div>
      </div>
      {activeProject === "home" && <App />}
    </div>
  );
}

export default Projects
