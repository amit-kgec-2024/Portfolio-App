import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "./Input";
import Loader from "./Loader";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

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
      {loading ? <Loader/> : <div
        className="p-3"
      >
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
      </div>}
    </div>
  );
};

export default Contact;
