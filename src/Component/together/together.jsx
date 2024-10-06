import { IoSendOutline } from "react-icons/io5";
import React from 'react';
import { NavLink } from 'react-router-dom';

function Together() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between mt-10 items-center px-4 sm:px-10 lg:px-20 xl:px-52 py-8 bg-yellow-50 dark:bg-black">
      <div className="text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-stone-50 transition duration-300 hover:scale-105">Let’s work together</h1>
        <p className="text-sm sm:text-base lg:text-lg mt-4 text-neutral-800 dark:text-stone-200 transition duration-300 hover:scale-105">
          Want to discuss an opportunity to create something great? I’m ready when you are.
        </p>
      </div>
      <NavLink to="/contacts">
        <div className="flex items-center">
          <button className="btn gap-3 items-center bg-stone-50 dark:text-stone-50 text-neutral-900 dark:bg-black transition-transform transform hover:scale-105 hover:bg-stone-400 dark:hover:bg-neutral-700">
            <IoSendOutline />
            Get in touch
          </button>
        </div>
      </NavLink>
    </div>
  );
}

export default Together;
