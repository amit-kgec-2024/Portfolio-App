import React from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { HiDocument } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function NavSection() {
  return (
    <div className="grid mx-20 my-10">
      <ul className="text-2xl">
        <NavLink to="/" className="grid grid-cols-2 py-2">
          <AiOutlineHome /> Home
        </NavLink>

        <NavLink to="/about" className="grid grid-cols-2 py-2">
          <AiOutlineUser /> About
        </NavLink>

        <NavLink to="/resume" className="grid grid-cols-2 py-2">
          <HiDocument />
          Resume
        </NavLink>

        <NavLink to="/contact" className="grid grid-cols-2 py-2">
          <AiOutlineMail />
          Contact
        </NavLink>
      </ul>
    </div>
  );
}
