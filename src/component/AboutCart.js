import React from 'react'
import { AiOutlineRight } from "react-icons/ai";

export default function AboutCart() {
  return (
    <div>
      <h2 className="text-3xl font-semibold">
        <span className='text-accent'>A</span>bout
      </h2>
      <div className="border-2 w-14 mt-4 border-sky-400" />
      <p className="text-gray-500 pt-4 text-xl">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="flex pt-8">
        <img className="w-[30%]" src="abou.jpg" alt="Secr" />
        <div className="ml-4">
          <h2 className="text-4xl font-bold">
            UI/UX Designer & Web Developer.
          </h2>
          <p className="text-gray-500 pt-4 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex pt-2 text-gray-500 text-xl">
            <ul className="text-xl">
              <li className="flex gap-3 mt-4">
                <AiOutlineRight className="text-sky-400 text-3xl" />
                <span className="text-xl text-black font-bold">Birthday: </span>
                8 Aug 1998
              </li>
              <li className="flex gap-3 mt-4">
                <AiOutlineRight className="text-sky-400 text-3xl" />
                <span className="text-xl text-black font-bold">Blood: </span>
                A+
              </li>
              <li className="flex gap-3 mt-4">
                <AiOutlineRight className="text-sky-400 text-3xl" />
                <span className="text-xl text-black font-bold">Phone: </span>
                +918513089660
              </li>
              <li className="flex gap-3 mt-4">
                <AiOutlineRight className="text-sky-400 text-3xl" />
                <span className="text-xl text-black font-bold">City: </span>
                Krishnanagar, Nadia
              </li>
            </ul>

            <ul className="text-xl ml-24">
              <li className="flex gap-3 mt-4">
                <AiOutlineRight className="text-sky-400 text-3xl" />
                <span className="text-xl text-black font-bold">Age: </span>25
              </li>
              <li className="flex gap-3 mt-4">
                <AiOutlineRight className="text-sky-400 text-3xl" />
                <span className="text-xl text-black font-bold">Degree:</span>
                Bachelor of Technology
              </li>
              <li className="flex gap-3 mt-4">
                <AiOutlineRight className="text-sky-400 text-3xl" />
                <span className="text-xl text-black font-bold">Gmail Id: </span>
                amitmandalbetai@gmail.com
              </li>
              <li className="flex gap-3 mt-4">
                <AiOutlineRight className="text-sky-400 text-3xl" />
                <span className="text-xl text-black font-bold">Freelance:</span>
                Available
              </li>
            </ul>
          </div>
          <p className="text-xl pt-4 text-gray-500">
            Officiis eligendi itaque labore et dolorum mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
            officiis quidem quia. Sed et consectetur qui quia repellendus itaque
            neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
            repellendus omnis culpa magni laudantium dolores.
          </p>
        </div>
      </div>
    </div>
  );
}
