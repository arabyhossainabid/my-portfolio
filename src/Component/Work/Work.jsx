import React from 'react';
import { GoArrowRight } from "react-icons/go";

function Work() {
  return (
    <section className='pt-32 pb-20 flex flex-col py-16 px-4 sm:px-10 lg:px-52 bg-neutral-50 dark:text-stone-50 text-neutral-900 dark:bg-black'>
      <h1 className='text-5xl font-bold pb-4'>Projects</h1>
      <p className='pb-10 text-neutral-600'>Projects and ideas I’ve worked on</p>

      {/* First Work Card */}
      <div className="bg-brown-200 text-zinc-900 dark:bg-zinc-900 dark:text-stone-50 mb-8 flex flex-col lg:flex-row justify-between lg:items-center lg:gap-8 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg">
        <div className="card-body p-4 sm:p-8">
          <img className='w-20' src="https://i.ibb.co/Pgj8LJg/science-15886932.png" alt="" />
          <h2 className="card-title text-2xl lg:text-3xl font-bold">React Documentation</h2>
          <p className='lg:w-[653px] text-neutral-600'>With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documents, improved my ability to write better PR requests, and learned more about Arabic grammar.</p>
          <div className="card-actions justify-start mt-4">
            <a href="https://react.dev/">
              <button className="flex items-center gap-2 bg-neutral-50 text-zinc-900 dark:bg-zinc-900 dark:text-stone-50 px-4 py-2 rounded-md">
                Download App <GoArrowRight />
              </button>
            </a>
          </div>
        </div>
        <div className='bg-neutral-50 text-zinc-900 dark:bg-zinc-900 dark:text-stone-50'>
          <img className='w-full lg:w-[600px] h-[360px] object-cover' src="https://i.ibb.co/JmXgVMk/react.jpg" alt="" />
        </div>
      </div>

      {/* Second Work Card */}
      <div className="bg-brown-200 text-zinc-900 dark:bg-zinc-900 dark:text-stone-50 mb-8 flex flex-col lg:flex-row justify-between lg:items-center lg:gap-8 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg">
        <div className="card-body bg-neutral-50 text-zinc-900 dark:bg-zinc-900 dark:text-stone-50 p-4 sm:p-8">
          <img className='w-20' src="https://i.ibb.co/BKdtPcd/icons8-next-js-48.png" alt="" />
          <h2 className="card-title text-2xl lg:text-3xl font-bold">Next.js Documentation</h2>
          <p className='lg:w-[653px] text-neutral-600'>Getting Started: Set up a Next.js project, Pages and Routing, Data Fetching (SSG, SSR), API Routes, and more. Learn various styling options like CSS modules and global CSS.</p>
          <div className="card-actions justify-start mt-4">
            <a href="https://nextjs.org/docs">
              <button className="flex items-center gap-2 bg-neutral-50 text-zinc-900 dark:bg-zinc-900 dark:text-stone-50 px-4 py-2 rounded-md">
                Download App <GoArrowRight />
              </button>
            </a>
          </div>
        </div>
        <div className='bg-neutral-50 text-zinc-900 dark:bg-zinc-900 dark:text-stone-50'>
          <img className='w-full lg:w-[600px] h-[360px] object-cover' src="https://i.ibb.co/WKcNT3f/62d8ab7014324b253e00f23f-what-is-next-js-p-500.jpg" alt="" />
        </div>
      </div>

      {/* Third Work Card */}
      <div className="bg-brown-200 text-zinc-900 dark:bg-zinc-900 dark:text-stone-50 mb-8 flex flex-col lg:flex-row justify-between lg:items-center lg:gap-8 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg">
        <div className="card-body bg-neutral-50 text-zinc-900 dark:bg-zinc-900 dark:text-stone-50 p-4 sm:p-8">
          <img className='w-20' src="https://i.ibb.co/ThYNsgX/icons8-tailwindcss-48.png" alt="" />
          <h2 className="card-title text-2xl lg:text-3xl font-bold">TailwindCSS Documentation</h2>
          <p className='lg:w-[653px] text-neutral-600'>Learn the utility-first approach, responsive design, customization, and component creation with Tailwind CSS. Explore how to create reusable components.</p>
          <div className="card-actions justify-start mt-4">
            <a href="https://tailwindcss.com/">
              <button className="flex items-center gap-2 bg-neutral-50 text-zinc-900 dark:bg-zinc-900 dark:text-stone-50 px-4 py-2 rounded-md">
                Download App <GoArrowRight />
              </button>
            </a>
          </div>
        </div>
        <div className='bg-neutral-50 text-zinc-900 dark:bg-zinc-900 dark:text-stone-50'>
          <img className='w-full lg:w-[600px] h-[360px] object-cover' src="https://i.ibb.co/hFLmR1P/9epc8m93yewqoix2318e.jpg" alt="" />
        </div>
      </div>

      {/* Fourth Work Card */}
      <div className="bg-brown-200 text-zinc-900 dark:bg-zinc-900 dark:text-stone-50 mb-8 flex flex-col lg:flex-row justify-between lg:items-center lg:gap-8 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-lg">
        <div className="card-body bg-neutral-50 text-zinc-900 dark:bg-zinc-900 dark:text-stone-50 p-4 sm:p-8">
          <img className='w-20' src="https://i.ibb.co/ThYNsgX/icons8-tailwindcss-48.png" alt="" />
          <h2 className="card-title text-2xl lg:text-3xl font-bold">JavaScript Fundamentals</h2>
          <p className='lg:w-[653px] text-neutral-600'>Master the core concepts of JavaScript including closures, promises, async/await, and ES6+ features. Understand how to build dynamic web applications and handle user interactions effectively.</p>
          <div className="card-actions justify-start mt-4">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide">
              <button className="flex items-center gap-2 bg-neutral-50 text-zinc-900 dark:bg-zinc-900 dark:text-stone-50 px-4 py-2 rounded-md">
                Learn More <GoArrowRight />
              </button>
            </a>
          </div>
        </div>
        <div className='bg-neutral-50 text-zinc-900 dark:bg-zinc-900 dark:text-stone-50'>
          <img className='w-full lg:w-[600px] h-[360px] object-cover' src="https://i.ibb.co/hFLmR1P/9epc8m93yewqoix2318e.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Work;
