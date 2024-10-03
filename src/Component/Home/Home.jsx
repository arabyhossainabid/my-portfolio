import React from 'react';
import Banner from '../Banner/Banner';
import Selected from '../Selected/Selected';
import KnowMe from '../knowMe/knowMe';
import Together from '../together/together';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16 px-4 sm:px-10 lg:px-52 text-stone-50 bg-black dark:bg-stone-50 dark:text-neutral-900">
      <Banner />
      <Selected />
      <KnowMe />
      <Together />
    </div>
  );
};

export default Home;
