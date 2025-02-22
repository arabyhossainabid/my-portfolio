import React from 'react';
import Banner from '../Banner/Banner';
import Selected from '../Selected/Selected';
import KnowMe from '../knowMe/knowMe';
import Together from '../together/together';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16 px-4 dark:text-stone-50 text-neutral-900">
      <div className="dark:text-stone-50 text-neutral-900">
        <Banner />
      </div>
      <Selected />
      <KnowMe />
      <Together />
    </div>
  );
};

export default Home;