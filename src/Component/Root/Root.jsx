import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GradientImage from '../../assets/Gradient.png'; // Import the gradient image

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

  return (
    <div 
      className={`${isDarkMode ? 'dark' : ''}`} 
      style={{ 
        backgroundColor: isDarkMode ? 'black' : '#ffffff', 
        minHeight: '100vh' // Set min-height to cover full viewport height
      }}
    >
      {/* Background Image for sm and lg screens */}
      <div
        className="absolute top-0 left-0 w-full z-0"
        style={{
          backgroundImage: `url(${GradientImage})`, // Background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px", // Default height for small screens
        }}
      />
      <div
        className="hidden lg:block absolute top-0 left-0 w-full z-0"
        style={{
          backgroundImage: `url(${GradientImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px", // Height for large screens
        }}
      />

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <div className="max-w-full">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
