import React from 'react';
import { NavLink } from 'react-router-dom';
import Resume from '../resume/resume';
function Banner() {
  return (
    <section className="flex flex-col lg:flex-row mx-4 sm:mx-10 lg:mx-32 dark:text-stone-50 text-neutral-900 items-center justify-around px-4 py-10">
      <div className="text-center lg:text-left mb-8 lg:mb-0 transform transition duration-500">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold pb-6">
          <span className="text-neutral-500">I’m</span> Araby Hossain Abid
        </h1>
        <p className="lg:w-[729px] pb-6 text-sm sm:text-base lg:text-lg">
          Skilled Front-End Developer with expertise in creating responsive, user-friendly web applications using HTML, CSS, JavaScript, and modern frameworks like React and Next.js. Passionate about bringing designs to life with clean, efficient code and delivering seamless user experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
          <button className='btn btn-outline bg-stone-300 text-neutral-900 dark:bg-black dark:text-stone-50 rounded-lg shadow-lg hover:scale-110 transform transition duration-300'>
          <Resume></Resume>
          </button>
          <NavLink to="/contacts">
            <button className="btn btn-outline bg-stone-300 text-neutral-900 dark:bg-black dark:text-stone-50 rounded-lg shadow-lg hover:scale-110 transform transition duration-300">
              Get in touch
            </button>
          </NavLink>
        </div>
      </div>

      <div className="relative transform transition duration-500 ">
        <img className="w-[200px] sm:w-[250px] lg:w-[400px] rounded-full shadow-lg" src="https://i.ibb.co/99kYMkn/1-1.png" alt="Profile" />
        <div className="absolute rounded-full bg-gradient-to-r from-transparent to-black opacity-40"></div> {/* Gradient overlay */}
      </div>
    </section>
  );
}

export default Banner;
