import React from "react";

function ProjectCard({ title, links, useTech }) {
  return (
    <div className="container items-center shadow-lg shadow-slate-700 mb-10 flex flex-col bg-slate-200 border-4 border-gray-400  rounded-md">
      <h1 className="text-4xl font-bold mt-10">{title}</h1>
      <p className="text-2xl p-8 text-gray-500 mt-10">{useTech}</p>
      <a
        target="_blank"
        href={links}
        className=" block m-10  transition duration-300 p-4 text-xl font-medium text-white rounded-md bg-emerald-400 hover:bg-green-300"
      >
        Check Now!
      </a>
    </div>
  );
}

export default ProjectCard;

ProjectCard.propTypes = {
  title: String,
  useTech: String,
  links: String,
};
