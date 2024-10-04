import React from 'react';
import { GoArrowRight } from "react-icons/go";

function Selected() {
  return (
    <section className='mt-32 mb-20'>
      <div className='text-4xl font-bold pb-10'>Selected Work</div>

      {/* First Work Card */}
      <div className="bg-zinc-900 mb-8 flex flex-col lg:flex-row justify-between rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
        <div className="card-body bg-stone-300 dark:bg-black text-neutral-900 dark:text-stone-50 p-6">
          <img className='w-20 mb-4' src="https://i.ibb.co/27SwZW2/Dream-Job.png" alt="Career Hub Dream Job" />
          <h2 className="card-title text-3xl font-bold mb-2">career-hub-dream-job</h2>
          <p className='lg:w-[653px] mb-4'>Career Hub is a responsive job search platform designed to help users discover and apply for jobs effortlessly. Built with React, it features a clean, modern interface and smooth navigation. The application integrates external APIs for real-time job listings and provides fast performance on all devices.</p>
          <div className="card-actions">
            <a href="https://career-hub-dream-job.netlify.app/">
              <button className="flex items-center gap-2 bg-stone-300 text-neutral-900 dark:bg-black dark:text-stone-50 px-4 py-2 rounded-lg shadow-md transform hover:translate-x-2 transition duration-300">
                Download App <GoArrowRight />
              </button>
            </a>
          </div>
        </div>
        <div className='bg-stone-300 dark:bg-black overflow-hidden'>
          <img className='w-full lg:w-[600px] h-[200px] lg:h-full object-cover' src="https://i.ibb.co/V2F2PwB/Cover-1.jpg" alt="Career Hub" />
        </div>
      </div>

      {/* Second Work Card */}
      <div className="bg-zinc-900 mb-8 flex flex-col lg:flex-row justify-between rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
        <div className="card-body bg-stone-300 dark:bg-black text-neutral-900 dark:text-stone-50 p-6">
          <img className='w-20 mb-4' src="https://i.ibb.co/BKdtPcd/icons8-next-js-48.png" alt="Next.js Documentation" />
          <h2 className="card-title text-3xl font-bold mb-2">Next.js Documentation</h2>
          <p className='lg:w-[653px] mb-4'>Getting Started: Set up a Next.js project, Pages and Routing, Data Fetching (SSG, SSR), API Routes, and more. Learn various styling options like CSS modules and global CSS.</p>
          <div className="card-actions">
            <a href="https://nextjs.org/docs">
              <button className="flex items-center gap-2 bg-stone-300 text-neutral-900 dark:bg-black dark:text-stone-50 px-4 py-2 rounded-lg shadow-md transform hover:translate-x-2 transition duration-300">
                Download App <GoArrowRight />
              </button>
            </a>
          </div>
        </div>
        <div className='bg-stone-300 dark:bg-black overflow-hidden'>
          <img className='w-full lg:w-[600px] h-[200px] lg:h-[348px] object-cover' src="https://i.ibb.co/WKcNT3f/62d8ab7014324b253e00f23f-what-is-next-js-p-500.jpg" alt="Next.js" />
        </div>
      </div>

      {/* Third Work Card */}
      <div className="bg-zinc-900 mb-8 flex flex-col lg:flex-row justify-between rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
        <div className="card-body bg-stone-300 dark:bg-black text-neutral-900 dark:text-stone-50 p-6">
          <img className='w-20 mb-4' src="https://i.ibb.co/ThYNsgX/icons8-tailwindcss-48.png" alt="TailwindCSS Documentation" />
          <h2 className="card-title text-3xl font-bold mb-2">TailwindCSS Documentation</h2>
          <p className='lg:w-[653px] mb-4'>Learn the utility-first approach, responsive design, customization, and component creation with Tailwind CSS. Explore how to create reusable components.</p>
          <div className="card-actions">
            <a href="https://tailwindcss.com/">
              <button className="flex items-center gap-2 bg-stone-300 text-neutral-900 dark:bg-black dark:text-stone-50 px-4 py-2 rounded-lg shadow-md transform hover:translate-x-2 transition duration-300">
                Download App <GoArrowRight />
              </button>
            </a>
          </div>
        </div>
        <div className='bg-stone-300 dark:bg-black overflow-hidden'>
          <img className='w-full lg:w-[600px] h-[200px] lg:h-[420px] object-cover' src="https://i.ibb.co/hFLmR1P/9epc8m93yewqoix2318e.jpg" alt="TailwindCSS" />
        </div>
      </div>
    </section>
  );
}

export default Selected;
