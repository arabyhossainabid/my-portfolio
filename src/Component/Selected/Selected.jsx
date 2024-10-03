import React from 'react';
import { GoArrowRight } from "react-icons/go";

function Selected() {
  return (
    <section className='mt-32 mb-20'>
      <div className='text-4xl font-bold pb-10'>Selected Work</div>

      
      <div className="bg-zinc-900 mb-8 flex flex-col lg:flex-row justify-between">
        <div className="card-body text-stone-50 bg-zinc-900 dark:bg-stone-50 dark:text-neutral-900">
          <img className='w-20' src="https://i.ibb.co/Pgj8LJg/science-15886932.png" alt="" />
          <h2 className="card-title text-3xl font-bold">React Documentation</h2>
          <p className='lg:w-[653px]'>With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documents, improved my ability to write better PR requests, and learned more about Arabic grammar.</p>
          <div className="card-actions justify-start">
            <a href="https://react.dev/">
              <button className="flex items-center gap-2 text-stone-50 bg-zinc-900 dark:bg-stone-50 dark:text-neutral-900">
                Download App <GoArrowRight />
              </button>
            </a>
          </div>
        </div>
        <div className='text-stone-50 bg-zinc-900 dark:bg-stone-50 dark:text-neutral-900'>
          <img className='w-full lg:w-[600px] h-[200px] lg:h-[324px]' src="https://i.ibb.co/JmXgVMk/react.jpg" alt="" />
        </div>
      </div>

      {/* Second Work Card */}
      <div className="bg-zinc-900 mb-8 flex flex-col lg:flex-row justify-between">
        <div className="card-body text-stone-50 bg-zinc-900 dark:bg-stone-50 dark:text-neutral-900">
          <img className='w-20' src="https://i.ibb.co/BKdtPcd/icons8-next-js-48.png" alt="" />
          <h2 className="card-title text-3xl font-bold">Next.js Documentation</h2>
          <p className='lg:w-[653px]'>Getting Started: Set up a Next.js project, Pages and Routing, Data Fetching (SSG, SSR), API Routes, and more. Learn various styling options like CSS modules and global CSS.</p>
          <div className="card-actions justify-start">
            <a href="https://nextjs.org/docs">
              <button className="flex items-center gap-2 text-stone-50 bg-zinc-900 dark:bg-stone-50 dark:text-neutral-900">
                Download App <GoArrowRight />
              </button>
            </a>
          </div>
        </div>
        <div className='text-stone-50 bg-zinc-900 dark:bg-stone-50 dark:text-neutral-900'>
          <img className='w-full lg:w-[600px] h-[200px] lg:h-[348px]' src="https://i.ibb.co/WKcNT3f/62d8ab7014324b253e00f23f-what-is-next-js-p-500.jpg" alt="" />
        </div>
      </div>

      {/* Third Work Card */}
      <div className="bg-zinc-900 mb-8 flex flex-col lg:flex-row justify-between">
        <div className="card-body text-stone-50 bg-zinc-900 dark:bg-stone-50 dark:text-neutral-900">
          <img className='w-20' src="https://i.ibb.co/ThYNsgX/icons8-tailwindcss-48.png" alt="" />
          <h2 className="card-title text-3xl font-bold">TailwindCSS Documentation</h2>
          <p className='lg:w-[653px]'>Learn the utility-first approach, responsive design, customization, and component creation with Tailwind CSS. Explore how to create reusable components.</p>
          <div className="card-actions justify-start">
            <a href="https://tailwindcss.com/">
              <button className="flex items-center gap-2 text-stone-50 bg-zinc-900 dark:bg-stone-50 dark:text-neutral-900">
                Download App <GoArrowRight />
              </button>
            </a>
          </div>
        </div>
        <div className='text-stone-50 bg-zinc-900 dark:bg-stone-50 dark:text-neutral-900'>
          <img className='w-full lg:w-[600px] h-[200px] lg:h-[420px]' src="https://i.ibb.co/hFLmR1P/9epc8m93yewqoix2318e.jpg" alt="" />
        </div>
      </div>

    </section>
  );
}

export default Selected;
