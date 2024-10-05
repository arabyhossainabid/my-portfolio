import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GradientImage from '../../assets/Gradient.png'; // Import the first gradient image

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
      {/* Background Layers */}
      <div
        style={{
          backgroundImage: `url(${GradientImage})`, // First gradient image
          height: "550px",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute", // Position absolutely for full coverage
          top: 0,
          left: 0,
          zIndex: 0, // Behind everything
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
