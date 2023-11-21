import React from 'react'

export default function ProfeSkillCard() {
  return (
    <div>
      <div className="container p-4 mt-2 gap-0 flex flex-col lg:text-2xl">
        <ul className="Flax w-full">
          <li className="float-left w-1/100 font-bold">Fontent Development</li>
        </ul>
        <ul className=" h-2 bg-pink-200 w-full rounded-md">
          <li className="bg-blue-500 h-2 w-[85%] top-0 rounded-md" />
        </ul>
      </div>
      <div className="container p-4 mt-2 gap-0 flex flex-col lg:text-2xl">
        <ul className="Flax w-full">
          <li className="float-left w-1/100 font-bold">Backend Development</li>
        </ul>
        <ul className=" h-2 bg-pink-200 w-full rounded-md">
          <li className="bg-blue-500 h-2 w-[40%] top-0 rounded-md" />
        </ul>
      </div>
      <div className="container p-4 mt-2 gap-0 flex flex-col lg:text-2xl">
        <ul className="Flax w-full">
          <li className="float-left w-1/100 font-bold">MATLAB</li>
        </ul>
        <ul className=" h-2 bg-pink-200 w-full rounded-md">
          <li className="bg-blue-500 h-2 w-[50%] top-0 rounded-md" />
        </ul>
      </div>
      <div className="container p-4 mt-2 gap-0 flex flex-col lg:text-2xl">
        <ul className="Flax w-full">
          <li className="float-left w-1/100 font-bold">Circuit Desigin & Repairing</li>
        </ul>
        <ul className=" h-2 bg-pink-200 w-full rounded-md">
          <li className="bg-blue-500 h-2 w-[70%] top-0 rounded-md" />
        </ul>
      </div>
    </div>
  );
}
