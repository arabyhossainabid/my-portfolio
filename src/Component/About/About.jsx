import { IoSendOutline } from "react-icons/io5";
import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col lg:px-52 px-10 py-16 text-stone-50 bg-black dark:bg-stone-50 dark:text-neutral-900">
      <h1 className="text-5xl lg:w-auto w-80 font-bold">A little bit about me</h1>
      <p className="mt-4 text-neutral-600">Who I am and what I do.</p>
      <div className='border-b mt-10 text-neutral-600'></div>
      
      <div className='flex flex-col-reverse lg:flex-row justify-between mt-16'>
        <div className='text-neutral-600 w-full lg:w-[605px]'>
          <div>
            <p className="text-xl font-semibold">Who I am</p>
            <p className='mt-3'>
              I'm Araby Hossain Abid, a passionate frontend developer with over 2 years of experience in building responsive and user-friendly web applications. Proficient in React, Next.js, DaisyUI, and Tailwind CSS, with a strong foundation in HTML, CSS, and JavaScript.
            </p>
          </div>
          
          <div className='mt-5'>
            <p className="text-xl font-semibold">What I Do</p>
            <p className='mt-3'>
              I focus on creating dynamic, responsive web applications that enhance user experience using React, Next.js, and Tailwind CSS. I collaborate with clients to bring their vision to life.
            </p>
          </div>
          
          <div>
            <p className="text-xl font-semibold mt-5">What I Did</p>
            <p className='mt-3'>
              I created responsive web applications, designed user-friendly interfaces, and collaborated closely with clients on various projects like e-commerce platforms and portfolios.
            </p>
          </div>
          
          <div className='mt-16'>
            Feel free to reach out via <a className='text-stone-50 link link-hover' href="mailto:arabyhossainabid@gmail.com">e-mail</a>, or follow me on <a className='text-stone-50 link link-hover' href="https://x.com/AbidAraby">Twitter</a>.
            <p className='mt-10'>Let’s build something great,</p>
            <p className="italic text-2xl">Araby Hossain Abid</p>
          </div>
        </div>
        
        <div className='mt-10 lg:mt-0 lg:ml-10'>
          <img className="w-[250px] sm:w-[300px] lg:w-[400px] mx-auto" src="https://i.ibb.co.com/99kYMkn/1-1.png" alt="Profile" />
          <div className="btn flex gap-3 items-center mx-auto mt-10 lg:w-[140px] lg:h-[32px] text-stone-50 bg-black dark:bg-stone-50 dark:text-neutral-900 hover:text-black">
            <IoSendOutline />
            <button className="focus:outline-none">Get in touch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
