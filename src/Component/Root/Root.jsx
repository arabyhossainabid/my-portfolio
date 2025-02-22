import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GradientImage from '../../assets/Gradient.png'; 
import footerGradient from '../../assets/footerGradient.png';

const Root = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
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
      {/* Background */}
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

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, flex: 1 }}>
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <div className="max-w-full">
          <Outlet />
        </div>
        <Footer toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Root;
