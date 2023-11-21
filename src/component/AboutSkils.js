import React from "react";
import SkillsCart from "./SkillsCart";

function AboutSkils() {
  return (
    <div className="container p-6 mt-24 bg-emerald-50">
      <h2 className="text-3xl font-semibold">
        Ski<span className="text-accent">ll</span>s
      </h2>
      <div className="border-2 w-14 mt-4 border-sky-400" />
      <p className="text-gray-500 text-md lg:text-2xl mt-6">
        Programming language JavaScript (ES6+). Web Development: Node.js,
        React.js, Next.js Repository MongoDB. Other technologies Other
        technologies/tools in which you are proficient. Soft communication,
        teamwork, problem solving etc.
      </p>
      <SkillsCart />
    </div>
  );
}
export default AboutSkils;
