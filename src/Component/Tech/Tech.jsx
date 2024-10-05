import React from 'react';
import { techItems } from '../../assets/tech-items';
import { GoArrowUpRight } from "react-icons/go";

function Tech() {
  const devAndDesign = techItems.slice(0, 6);
  const app = techItems.slice(9, 18);
  const hardware = techItems.slice(18, 21);
  const game = techItems.slice(27, 33);

  const renderTechSection = (title, items, showButton = true) => (
    <div className="mb-12">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10">
        {items.map((tech) => (
          <a
            key={tech.id}
            href={tech.url} // Use the URL dynamically from the techItems array
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-neutral-900 bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-50 card card-compact w-full sm:w-[300px] lg:w-[330px] h-auto shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-stone-300 dark:hover:bg-neutral-700 hover:text-neutral-900"
          >
            <figure className="relative">
              <img
                className="w-[90px] sm:w-[100px] lg:w-[114px] h-[90px] sm:h-[100px] lg:h-[114px] rounded-2xl mt-8 sm:mt-12 lg:mt-16"
                src={tech.image}
                alt={tech.name}
              />
              <GoArrowUpRight
                className="absolute top-2 right-2 text-xl text-neutral-900 dark:text-neutral-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:text-red-500"
              />
            </figure>
            <div className="pt-5 pb-3 sm:pt-7 lg:pt-10 mt-5 sm:mt-7 lg:mt-7 flex justify-between mx-5 items-center">
              <h2 className="font-bold">{tech.name}</h2>
              {showButton && (
                <div className="card-actions justify-end">
                  <button className="text-neutral-900 font-semibold px-3 text-sm btn-sm rounded-full hover:dark:bg-neutral-400 hover:bg-neutral-300 bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-50">
                    {tech.action}
                  </button>
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4 sm:px-10 lg:px-52 text-neutral-900 bg-transparent dark:bg-transparent dark:text-stone-50">
      {renderTechSection('Dev & Design', devAndDesign)}
      {renderTechSection('App', app)}
      {renderTechSection('Hardware', hardware, false)}
      {renderTechSection('Game', game, false)}
    </section>
  );
}

export default Tech;
