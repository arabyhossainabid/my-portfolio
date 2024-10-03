import React, { useEffect, useState } from 'react';

function Tech() {
  const [techItems, setTechItems] = useState([]);

  useEffect(() => {
    fetch('../../../public/AHA/AHA.json')
      .then((response) => response.json())
      .then((data) => setTechItems(data))
      .catch((error) => console.error('Error fetching tech data:', error));
  }, []);

  // Split the items into categories
  const devAndDesign = techItems.slice(0, 6);
  const app = techItems.slice(9, 18);
  const hardware = techItems.slice(18, 21);
  const game = techItems.slice(27, 33);

  // Function to render tech section with or without button
  const renderTechSection = (title, items, showButton = true) => (
    <div className="mb-12">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10">
        {items.map((tech) => (
          <div key={tech.id} className="text-stone-50 bg-neutral-900 dark:bg-stone-50 dark:text-neutral-900 card card-compact w-full sm:w-[300px] lg:w-[330px] h-auto shadow-xl">
            <figure>
              <img className="w-[90px] sm:w-[100px] lg:w-[114px] h-[90px] sm:h-[100px] lg:h-[114px] rounded-2xl mt-8 sm:mt-12 lg:mt-16" src={tech.image} alt={tech.name} />
            </figure>
            <div className="pt-5 sm:pt-7 lg:pt-10 mt-5 sm:mt-7 lg:mt-7 flex justify-between mx-5 items-center">
              <h2>{tech.name}</h2>
              {showButton && (
                <div className="card-actions justify-end">
                  <button className="text-stone-50 font-semibold px-3 text-sm btn-sm rounded-full hover:dark:bg-neutral-400 hover:bg-stone-800 bg-neutral-600 dark:bg-stone-300 dark:text-neutral-900">
                    {tech.action}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4 sm:px-10 lg:px-52 text-stone-50 bg-black dark:bg-stone-50 dark:text-neutral-900">
      {renderTechSection('Dev & Design', devAndDesign)}
      {renderTechSection('App', app)}
      {renderTechSection('Hardware', hardware, false)}
      {renderTechSection('Game', game, false)}
    </section>
  );
}

export default Tech;
