import React from 'react';
import { Link } from 'react-router-dom';

function KnowMe() {
  return (
    <main>
      <section className='flex flex-col sm:flex-row justify-between gap-10 my-10 text-stone-50 bg-black dark:bg-stone-50 dark:text-neutral-900'>
        
        <Link to="/about" className="card text-center w-full sm:w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title mx-auto text-lg sm:text-xl">About Me</h2>
            <p className='text-sm sm:text-base'>Who I am and what I do</p>
          </div>
          <figure>
            <img
              className='rounded-full w-[223px] mx-auto'
              src="https://i.ibb.co/99kYMkn/1-1.png"
              alt="About Me Section" />
          </figure>
        </Link>

        <Link to="/tech" className="card text-center w-full sm:w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title mx-auto text-lg sm:text-xl">Tech Stack</h2>
            <p className='text-sm sm:text-base'>The dev tools and devices I use.</p>
          </div>
          <figure>
            <img
              className='rounded-full w-[223px] mx-auto'
              src="https://i.ibb.co/DV9WZpM/static-assets-concept-illustration-114360-1133.jpg"
              alt="Tech Stack Section" />
          </figure>
        </Link>

      </section>
    </main>
  );
}

export default KnowMe;
