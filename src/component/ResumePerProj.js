import React from 'react'
import { BiSolidCalendar } from "react-icons/bi";


function ResumePerProj({time, title, details}) {
  return (
    <div className="">
      <div className="border-l-8 border-indigo-300 p-2 mx-2 text-2xl text-gray-500">
        <div className="border-2 w-[650px] border-gray-300 p-3 rounded-lg">
          <ul className="flex text-3xl gap-4">
            <BiSolidCalendar />
            <li>{time}</li>
          </ul>
          <h1 className="font-bold">{title}</h1>
          <p>{details}</p>
        </div>
      </div>
      <div className="border-1 rounded-full w-6 h-6 bg-indigo-300" />
    </div>
  );
}

export default ResumePerProj

ResumePerProj.propType = {
  time: String,
  title: String,
  details: String,
};