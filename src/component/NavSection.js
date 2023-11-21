import React from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { HiDocument } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function NavSection() {
  return (
    <div className="grid px-10 my-10">
      <ul className="text-xl">
        <NavLink to="/" className="flex flex-row py-2 gap-4">
          <AiOutlineHome className="my-1"/> Home
        </NavLink>

        <NavLink to="/about" className="flex flex-row py-2 gap-4">
          <AiOutlineUser className="my-1"/> About
        </NavLink>

        <NavLink to="/resume" className="flex flex-row py-2 gap-4">
          <HiDocument className="my-1"/>
          Resume
        </NavLink>

        <NavLink to="/contact" className="flex flex-row py-2 gap-4">
          <AiOutlineMail className="my-1"/>
          Contact
        </NavLink>
      </ul>
    </div>
  );
}
