import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function PopupSuc() {
  return (
    <div className="absolute left-[70%] top-[5%] flex text-3xl p-4 w-[400px] rounded-md text-green-400 transition duration bg-white gap-4 border border-gray-400">
      <h1>Message Send Succes</h1>
      <AiOutlineCheckCircle className="mt-1"/>
    </div>
  );
}
