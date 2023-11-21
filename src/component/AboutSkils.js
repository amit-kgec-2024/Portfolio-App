import React from "react";
import SkillsCart from "./SkillsCart";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function AboutSkils() {

  const [text] = useTypewriter({
    words: ['C/C++', 'HTML', 'CSS', 'JAVASCRIPT', 'NODE JS', 'REACT JS', 'NEXT JS', 'MONGODB/MY SQL'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 100,
  });
  return (
    <div className="container p-6 mt-24 bg-emerald-50">
      <h2 className="text-3xl font-semibold">
        Ski<span className="text-accent">ll</span>s
      </h2>
      <div className="border-2 w-14 mt-4 border-sky-400" />
      <h2 className="font-semibold text-xl text-green-600 py-3">
        My Programming Skills <span className=" text-red-500">{text}</span>
        <span className="text-red-500 font-bold">
          <Cursor />
        </span>
      </h2>
      <p className="text-gray-500 text-md lg:text-base mt-6">
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
