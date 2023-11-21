import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { RiMenuUnfoldFill } from "react-icons/ri";

export default function NavbarSm() {

    const [showBox, setShowBox] = useState(false);

    const toggleBox = () => {
        setShowBox(!showBox);
    }
  return (
    <main>
      <div className="lg:hidden w-screen h-16 fixed top-0 bg-white grid grid-rows-2 sm:grid-cols-2 drop-shadow-2xl z-40">
        <div className="flex">
          <div className="my-4 mx-4 text-3xl sm:hidden w-[60%]">
            <RiMenuUnfoldFill onClick={toggleBox} />
          </div>
          <p className="text-xl place-items-end sm:px-14 py-3 sm:block font-bold">
            Portfo<span className="text-red-600">lio.</span>
          </p>
        </div>
        {showBox && (
          <div className="grid grid-row-4 h-[140px] sm:h-0 sm:grid-cols-4 gap-y-2 py-2 text-center mt-5 sm:mt-0 bg-white drop-shadow-2xl">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        )}
      </div>
    </main>
  );
}
