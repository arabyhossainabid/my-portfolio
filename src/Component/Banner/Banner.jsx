import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Resume } from '../../assets/Professional Frontend Developer  CV Resume.pdf';

function Banner() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-around px-4 sm:px-10 lg:px-14 py-10">
      <div className="text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-4xl lg:text-5xl font-bold pb-6">
          <span className="text-neutral-500">I’m</span> Araby Hossain Abid
        </h1>
        <p className="lg:w-[729px] pb-6 text-sm sm:text-base lg:text-lg">
          Skilled Front-End Developer with expertise in creating responsive, user-friendly web applications using HTML, CSS, JavaScript, and modern frameworks like React and Next.js. Passionate about bringing designs to life with clean, efficient code and delivering seamless user experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
          <a
            href="Resume"
            download="Araby_Hossain_Abid_Resume.pdf"
            className="btn btn-outline text-stone-50 bg-black dark:bg-stone-50 dark:text-neutral-900 rounded-lg"
          >
            See my resume
          </a>
          <NavLink to="/contacts">
            <button className="btn btn-outline text-stone-50 bg-black dark:bg-stone-50 dark:text-neutral-900 rounded-lg">
              Get in touch
            </button>
          </NavLink>
        </div>
      </div>
      <div>
        <img className="w-[250px] sm:w-[300px] lg:w-[400px]" src="https://i.ibb.co/99kYMkn/1-1.png" alt="Profile" />
      </div>
    </section>
  );
}

export default Banner;
