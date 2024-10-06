import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GradientImage from '../../assets/Gradient.png'; 
import footerGradient from '../../assets/footerGradient.png'; 
import Loader from '../Loader/Loader'; // Import the Loader component

const Root = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  return (
    <div 
      className={`${isDarkMode ? 'dark' : ''}`} 
      style={{ 
        backgroundColor: isDarkMode ? 'black' : '#ffffff', 
        minHeight: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Full height background image */}
      <div
        className="absolute top-0 left-0 w-full z-0"
        style={{
          backgroundImage: `url(${GradientImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
        }}
      />
      
      <div
        className="absolute bottom-0 left-0 w-full z-0"
        style={{
          backgroundImage: `url(${footerGradient})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
        }}
      />

      {isLoading ? (  // Display Loader when loading
        <Loader isDarkMode={isDarkMode} />
      ) : (
        <div style={{ position: 'relative', zIndex: 2, flex: 1 }}>
          <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <div className="max-w-full">
            <Outlet />
          </div>
        </div>
      )}

      <div style={{ position: 'relative', zIndex: 2, flex: 1 }}>
        <Footer toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Root;
