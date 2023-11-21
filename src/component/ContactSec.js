import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";


export default function ContactSec() {
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
    <main className=" ld:w-[80%] lg:pl-[20%] relative" id="contact">
      <div
        className="p-6"
      >
        <h1 className="font-bold text-center text-white text-2xl md:text-4xl my-6">
          Contact <span className="text-accent">Me!</span>
        </h1>
        <div className="flex flex-col lg:flex-row gap-2 mx-10 md:mx-28">
          <ul className=" md:mx-2 my-6 md:w-[80%] lg:w-[50%]">
            <h1 className="text-center text-2xl text-teal-800 my-6 font-bold">
              <span>Get in Touch</span>
            </h1>
            <li className="flex flex-row gap-4 text-gray-500 text-md my-3">
              <FaUser className="my-4 text-2xl lg:text-3xl text-red-700" />
              <div>
                <h1>Name</h1>
                <h2>Amit Mandal</h2>
              </div>
            </li>
            <li className="flex flex-row gap-4 text-gray-500 text-md my-3">
              <IoIosMail className="my-4 text-2xl lg:text-3xl text-red-700" />
              <div>
                <h1>Gmail</h1>
                <h2>amitmandalbetai@gmail.com</h2>
              </div>
            </li>
            <li className="flex flex-row gap-4 text-gray-500 text-md my-3">
              <FaLocationDot className="my-4 text-2xl lg:text-3xl text-red-700" />
              <div>
                <h1>Addres</h1>
                <h2>Kalyani, Nadia, W.B, India</h2>
              </div>
            </li>
            <li className="flex flex-row gap-4 text-gray-500 text-md my-3">
              <IoCall className="my-4 text-2xl lg:text-3xl text-red-700" />
              <div>
                <h1>Mobil Number</h1>
                <h2>+918513089660</h2>
              </div>
            </li>
          </ul>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="md:my-4 grid grid-rows-3 "
          >
            <ul className=" my-2 p-2 grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                name="from_name"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm lg:text-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 shadow-sm placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
              <input
                type="gmail"
                name="from_gmail"
                placeholder="Email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm lg:text-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 shadow-sm placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
              <input
                type="text"
                name="from_number"
                placeholder="Contact Number"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm lg:text-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 shadow-sm placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
              <input
                type="text"
                name="from_subject"
                placeholder="Subjects"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm lg:text-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 shadow-sm placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </ul>
            <textarea
              name="message"
              id=""
              cols="20"
              rows="3"
              placeholder="Message...."
              className="mx-10 md:mx-20 my-1 p-2 bg-white border border-slate-300 rounded-md text-sm lg:text-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 shadow-sm placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <div className="text-center">
              <button
                type="submit"
                value="send"
                className="border border-spacing-3 transition duration-300 p-3 mt-10 text-xs lg:text-sm rounded-md bg-red-700 hover:bg-red-600 text-white hover:text-sky-100"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
