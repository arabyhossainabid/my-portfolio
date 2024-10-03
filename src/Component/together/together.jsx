import { IoSendOutline } from "react-icons/io5";
import React from 'react';

function Together() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between mt-10 items-center px-4 sm:px-10 lg:px-20 xl:px-52 py-8">
      <div className="text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Let’s work together</h1>
        <p className="text-sm sm:text-base lg:text-lg mt-4">
          Want to discuss an opportunity to create something great? I’m ready when you are.
        </p>
      </div>
      <div className="btn flex gap-3 items-center btn-xs sm:btn-sm md:btn-md lg:btn-lg text-stone-50 bg-black dark:bg-stone-50 dark:text-neutral-900 hover:text-black">
        <IoSendOutline />
        <button className="focus:outline-none">Get in touch</button>
      </div>
    </div>
  );
}

export default Together;
