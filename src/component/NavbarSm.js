import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { RiMenuUnfoldFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

export default function NavbarSm() {

    const [showBox, setShowBox] = useState(false);

    const toggleBox = () => {
        setShowBox(!showBox);
    }
  return (
    <main>
      <div className="lg:hidden w-screen h-16 fixed top-0 bg-white grid grid-rows-2 drop-shadow-2xl z-40">
        <div className="flex">
          <div
            className="my-4 mx-4 text-3xl text-red-400 w-[60%] sm:w-[75%]"
            onClick={toggleBox}
          >
            {showBox ? <RxCross2 /> : <RiMenuUnfoldFill />}
          </div>
          <p className="text-xl text-end py-3 right-0  font-bold">
            Portfo<span className="text-red-600">lio.</span>
          </p>
        </div>
        {showBox && (
          <div className="grid grid-row-4 h-[140px] py-2 text-center mt-8  bg-gray-100 drop-shadow-2xl">
            <NavLink to="/" onClick={toggleBox}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={toggleBox}>
              About
            </NavLink>
            <NavLink to="/resume" onClick={toggleBox}>
              Resume
            </NavLink>
            <NavLink to="/contact" onClick={toggleBox}>
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </main>
  );
}
