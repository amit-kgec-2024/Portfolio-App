import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import PopupSuc from "./PopupSuc";

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
    <main className="w-[80%] left-[20%] relative">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="container p-14 justify-center items-center bg-pink-100 text-center flex flex-col"
      >
        <h1 className="font-bold text-4xl pt-6">
          Contact <span className="text-accent">Me!</span>
        </h1>
        <ul className="grid mt-10 gap-10 w-[100%] p-8 grid-cols-2">
          <input
            type="text"
            placeholder="Full Name"
            name="from_name"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-2xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 shadow-sm placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
          <input
            type="gmail"
            name="from_gmail"
            placeholder="Email Address"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-2xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 shadow-sm placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
          <input
            type="text"
            name="from_number"
            placeholder="Mobile Number"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-2xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 shadow-sm placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
          <input
            type="text"
            name="from_subject"
            placeholder="Email Subject"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-2xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 shadow-sm placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </ul>
        <textarea
          name="message"
          id=""
          cols="100"
          rows="10"
          placeholder="Your Message"
          className="px-3 mt-10 py-2 bg-white border border-slate-300 rounded-md text-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 shadow-sm placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <button
          type="submit"
          value="send"
          className="border border-spacing-3 transition duration-300 p-3 mt-10 text-2xl rounded-md bg-sky-400 hover:bg-pink-400 text-white hover:text-sky-100"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
