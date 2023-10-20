import React from 'react'

export default function ProfeSkillCard() {
  return (
    <div>
      <div className="container p-4 mt-2 gap-0 flex flex-col">
        <ul className="Flax w-full">
          <li className="float-left w-1/100 font-bold text-xl">Fontent Development</li>
          <li className="float-right  w-1/100 font-bold text-xl">85%</li>
        </ul>
        <ul className=" h-4 bg-pink-200 w-full rounded-md">
          <li className="bg-blue-500 h-4 w-[85%] top-0 rounded-md" />
        </ul>
      </div>
      <div className="container p-4 mt-2 gap-0 flex flex-col">
        <ul className="Flax w-full">
          <li className="float-left w-1/100 font-bold text-xl">Backend Development</li>
          <li className="float-right  w-1/100 font-bold text-xl">40%</li>
        </ul>
        <ul className=" h-4 bg-pink-200 w-full rounded-md">
          <li className="bg-blue-500 h-4 w-[40%] top-0 rounded-md" />
        </ul>
      </div>
      <div className="container p-4 mt-2 gap-0 flex flex-col">
        <ul className="Flax w-full">
          <li className="float-left w-1/100 font-bold text-xl">MATLAB</li>
          <li className="float-right  w-1/100 font-bold text-xl">50%</li>
        </ul>
        <ul className=" h-4 bg-pink-200 w-full rounded-md">
          <li className="bg-blue-500 h-4 w-[50%] top-0 rounded-md" />
        </ul>
      </div>
      <div className="container p-4 mt-2 gap-0 flex flex-col">
        <ul className="Flax w-full">
          <li className="float-left w-1/100 font-bold text-xl">Circuit Desigin & Repairing</li>
          <li className="float-right  w-1/100 font-bold text-xl">70%</li>
        </ul>
        <ul className=" h-4 bg-pink-200 w-full rounded-md">
          <li className="bg-blue-500 h-4 w-[70%] top-0 rounded-md" />
        </ul>
      </div>
    </div>
  );
}
