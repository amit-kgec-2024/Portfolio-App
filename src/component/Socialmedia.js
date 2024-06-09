import React from 'react';
import { IoLogoVercel } from "react-icons/io5";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const Socialmedia = () => {
    const handelGithub = () => {
      window.open(
        "https://github.com/amit-kgec-2024?tab=repositories",
        "_blank"
      );
    };
    const handelLinkdin = () => {
      window.open(
        "https://www.linkedin.com/in/amit-mandal-82685a227",
        "_blank"
      );
    };
    const handelTwiter = () => {
      window.open(
        "https://twitter.com/Matrix0Amit?t=tWWaaG-gUArP_kgzZPJ_Bg&s=09",
        "_blank"
      );
    };
    const handelInstgram = () => {
      window.open(
        "https://instagram.com/its_me__otis?igshid=MzNlNGNkZWQ4Mg==",
        "_blank"
      );
    };
    const handelFacebook = () => {
      window.open(
        "https://www.facebook.com/profile.php?id=100009147136594&mibextid=ZbWKwL",
        "_blank"
      );
    };
    const handelVercel = () => {
      window.open("https://vercel.com/amit-mandals-projects", "_blank");
    };
  return (
    <>
      <div className="flex flex-row w-full justify-around">
        <button
          onClick={handelGithub}
          className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300 w-9 flex justify-center animate-text-rotate-left-to-right"
        >
          <AiFillGithub />
        </button>
        <button
          onClick={handelLinkdin}
          className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300 w-9 flex justify-center animate-text-rotate-left-to-right"
        >
          <AiFillLinkedin />
        </button>
        <button
          onClick={handelTwiter}
          className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300 w-9 flex justify-center animate-text-rotate-left-to-right"
        >
          <AiFillTwitterCircle />
        </button>
        <button
          onClick={handelInstgram}
          className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300 w-9 flex justify-center animate-text-rotate-left-to-right"
        >
          <AiFillInstagram />
        </button>
        <button
          onClick={handelFacebook}
          className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300 w-9 flex justify-center animate-text-rotate-left-to-right"
        >
          <AiFillFacebook />
        </button>
        <button
          onClick={handelVercel}
          className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300 w-9 flex justify-center animate-text-rotate-left-to-right"
        >
          <IoLogoVercel />
        </button>
      </div>
      <style>{`
      
.animate-text-rotate-left-to-right {
    animation: text-rotate-left-to-right 3s linear infinite;
}
@keyframes text-rotate-left-to-right  {
    0% {
        transform: rotate(0deg);
    }
        5%{
        transform: rotate(-15deg);
        }
        10%{
        transform: rotate(15deg);
        }
        15%{
        transform: rotate(0deg);
        }

    100% {
        
    }
}
      `}</style>
    </>
  );
}

export default Socialmedia
