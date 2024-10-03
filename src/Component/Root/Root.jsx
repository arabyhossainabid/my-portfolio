import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import Loader from '../Loader/Loader'; // Import a loader component

const Root = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Simulate a loading state
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // if (isLoading) {
  //   return <Loader />; // Display the loader while loading
  // }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className="max-w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
