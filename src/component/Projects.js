import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjcetData from "../utils/projectData";
import Loader from "./Loader";

const Projects = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? <Loader/> : <div className={`bg-teal-100 p-2 w-full`}>
        <div className="grid sm:grid-cols-2 gap-10 px-5 sm:px-16 justify-between">
          {ProjcetData.slice()
            .reverse()
            .map((ele) => (
              <ProjectCard
                key={ele}
                projectImg={ele.projectImg}
                projectName={ele.projectName}
                linksProject={ele.linksProject}
                projectDetails={ele.projectDetails}
              />
            ))}
        </div>
      </div>}
    </div>
  );
};

export default Projects;
