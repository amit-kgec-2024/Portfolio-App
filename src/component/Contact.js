import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsFilterRight } from "react-icons/bs";
import Input from "./Input";
import Navbar from "./Navbar";

const Contact = () => {
  const [isNavbar, setIsNavbar] = useState(false);
  const handleNavbarClick = () => {
    setIsNavbar((prev) => !prev);
  };

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
        className={`bg-dark6 absolute top-0 left-0 z-50 w-full h-screen ${
          isNavbar ? "hidden" : "opacity-100 text-teal-500"
        }`}
      >
        <div className="flex flex-row justify-between items-center p-4">
          <p className="navigation-button text-xl text-end py-3 font-bold text-white">
            Portfolio.
          </p>
          <button
            className="navigation-button my-4 mx-4 text-3xl"
            onClick={handleNavbarClick}
          >
            <BsFilterRight />
          </button>
        </div>
        <div className="px-6">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col">
            <Input type="text" name="from_name" label="NAME" />
            <Input type="email" name="from_email" label="EMAIL" />
            <Input type="text" name="from_number" label="NUMBER" />
            <Input type="text" name="from_subject" label="SUBJECT" />
            <label className="block text-xl text-slate-300 lg:text-3xl py-3 font-extrabold">
              MESSAGE
            </label>
            <textarea
              name="message"
              cols="20"
              rows="5"
              className="outline-none p-2 text-slate-200 bg-dark6 border-2 border-slate-400"
            />
            <div className="text-center">
              <button
                type="submit"
                className="border-2 border-slate-300 text-slate-200 my-6 px-6 py-2 text-2xl font-bold"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
      {isNavbar && <Navbar />}
    </div>
  );
};

export default Contact;
