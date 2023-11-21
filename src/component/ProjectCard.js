import React from "react";

function ProjectCard({ title, links, useTech }) {
  return (
    <div
      className="container bg-fixed items-center shadow-lg shadow-slate-700 my-10 flex flex-col  rounded-md"
      style={{ backgroundImage: `url(${"7615017.svg"})` }}
    >
      <h1 className="text-4xl font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-700">
        {title}
      </h1>
      <p className="text-sx md:text-2xl p-8 text-gray-500 mt-10">{useTech}</p>
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
