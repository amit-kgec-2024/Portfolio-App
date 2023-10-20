import React from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { HiDocument } from "react-icons/hi";
import { BiServer, BiBookContent } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function NavSection() {
  return (
    <div className="container mt-8 flex">
      <ul className="text-3xl text-white">
        <NavLink
          to="/"
          className="flex gap-6 pt-6"
        >
          <AiOutlineHome /> Home
        </NavLink>

        <NavLink
          to="/about"
          className="flex gap-6 pt-6"
        >
          <AiOutlineUser /> About
        </NavLink>

        <NavLink
          to="/resume"
          className="flex gap-6 pt-6"
        >
          <HiDocument />
          Resume
        </NavLink>

        <NavLink
          to="/projects"
          className="flex gap-6 pt-6"
        >
          <BiBookContent />
          My Projects
        </NavLink>

        <NavLink
          to="/contact"
          className="flex gap-6 pt-6"
        >
          <AiOutlineMail />
          Contact
        </NavLink>
      </ul>
    </div>
  );
}
