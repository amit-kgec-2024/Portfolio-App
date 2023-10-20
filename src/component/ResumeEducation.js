import React from "react";
import { BiSolidCalendar } from "react-icons/bi";

const ResumeEducation = ({ time, university, colleg, place, depertment }) => {
  return (
    <div className="">
      <div className="border-l-8 border-indigo-300 p-2 mx-2 text-2xl text-gray-500">
        <div className="border-2 w-[600px] border-gray-300 p-3 rounded-lg">
          <ul className="flex text-3xl gap-4">
            <BiSolidCalendar />
            <li>{time}</li>
          </ul>
          <h1 className="font-bold">{university}</h1>
          <p>{colleg}</p>
          <p>{place}</p>
          <p>{depertment}</p>
        </div>
      </div>
      <div className="border-1 rounded-full w-6 h-6 bg-indigo-300" />
    </div>
  );
};
export default ResumeEducation;

ResumeEducation.propType = {
  time: String,
  university: String,
  colleg: String,
  place: String,
  depertment: String,
};
