import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiLinkedin } from 'react-icons/ci';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { TiAdjustBrightness } from 'react-icons/ti';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  // Toggle mobile menu open/close
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation links
  const links = (
    <>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/work">Work</NavLink></li>
      <li><NavLink to="/contacts">Contacts</NavLink></li>
      <li><NavLink to="/tech">Tech Stack</NavLink></li>
    </>
  );

  return (
    <div className="navbar px-4 md:px-48 text-stone-50 dark:text-neutral-900 bg-black dark:bg-stone-50 relative">
      {/* Logo and Menu for Small Devices */}
      <div className="navbar-start md:hidden flex items-center justify-between w-full">
        <NavLink to="/" className="btn btn-ghost text-xl">
          <img className="w-[40px] h-[26px]" src="https://i.ibb.co.com/nbd3gYX/AR-portfolio.png" alt="Logo" />
        </NavLink>
        {/* Mobile menu toggle button */}
        <button onClick={handleMenuToggle} className="text-2xl">
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <ul className="menu menu-compact absolute top-14 left-0 w-full bg-black dark:bg-stone-50 p-4 z-50 text-center">
          {links}
        </ul>
      )}

      {/* Center Logo for larger screens */}
      <div className="navbar-center md:flex hidden">
        <NavLink to="/" className="btn btn-ghost text-xl">
          <img className="w-[40px] h-[26px]" src="https://i.ibb.co.com/nbd3gYX/AR-portfolio.png" alt="Logo" />
        </NavLink>
      </div>

      {/* Navigation Links for larger screens */}
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      {/* Social Icons */}
      <div className="navbar-end gap-6">
        <a href="https://www.linkedin.com/in/araby-hossain-abid-6790a5318/" className="text-2xl hidden sm:block">
          <CiLinkedin />
        </a>
        <a href="https://x.com/AbidAraby" className="text-2xl hidden sm:block">
          <RiTwitterXLine />
        </a>
        <a href="https://github.com/Abid-2743" className="text-2xl hidden sm:block">
          <FaGithub />
        </a>
      </div>

      {/* Dark Mode Toggle */}
      <button onClick={toggleTheme} className="ms-2 text-2xl">
        <TiAdjustBrightness />
      </button>
    </div>
  );
};

export default Header;
