import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsFilterRight } from "react-icons/bs";
import Input from "../Input";
import Navbar from "../Navbar";

const Contact = () => {
    const [isNavbar, setIsnavbar] = useState(null)
    const handelNavbarClick = (toggleNav)=>{
        setIsnavbar(toggleNav);
    }
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_376k5eu",
        "template_z3ikrfn",
        form.current,
        "PpfGx2sy5pjNVFUL2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div
        className={`bg-pink-200 absolute top-0 left-0 z-50 w-full h-screen opacity-100 ${
          isNavbar ? "hidden" : ""
        }`}
      >
        <div className="flex flex-row justify-between items-center p-4">
          <p className="navigation-button text-xl text-end py-3 font-bold text-whit">
            Portfolio.
          </p>
          <button
            className="navigation-button my-4 mx-4 text-3xl"
            onClick={() => handelNavbarClick("navbar")}
          >
            <BsFilterRight />
          </button>
        </div>
        <div className="px-6">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col">
            <div className=" my-2 p-2 flex flex-col w-full">
              <Input
                type="text"
                name="from_name"
                className="outline-none bg-pink-200"
                label="NAME"
              />
              <Input
                type="gmail"
                name="from_gmail"
                label="EMAIL"
                className="outline-none bg-pink-200"
              />
              <Input
                type="text"
                name="from_number"
                label="NUMBER"
                className="outline-none bg-pink-200"
              />
              <input
                type="text"
                name="from_subject"
                label="SUBJECT"
                className="outline-none bg-pink-200"
              />
            </div>
            <label className="block text-xl lg:text-3xl py-3 font-extrabold">
              MESSAGE
            </label>
            <textarea
              name="message"
              id=""
              cols="20"
              rows="5"
              className="outline-none p-2 bg-pink-200 border-2 border-black"
            />
            <div className="text-center">
              <button
                type="submit"
                value="send"
                className="border-2 border-black my-6 px-6 py-2 text-2xl font-bold"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
      {isNavbar === "navbar" && <Navbar />}
    </div>
  );
};

export default Contact;
