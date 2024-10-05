import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer 
      className="footer justify-between bg-stone-50 dark:text-stone-50 text-neutral-900 dark:bg-black p-10"
      style={{
        backgroundImage: 'url(https://i.ibb.co/2dYwr4K/Gradient-1.png)', // Set the gradient background image
        backgroundSize: 'cover', // Ensure the image covers the footer
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent background image from repeating
        padding: "50px 0", // Use padding for height instead of fixed height
      }}
    >
      <aside>
        <a href="/" aria-label="Go to homepage">
          <img
            className="w-[50px] h-[35px] transition-transform duration-300 transform hover:scale-110"
            src="https://i.ibb.co/xg2J4ds/DF.png"
            alt="ACME Industries Logo"
          />
        </a>
        <p className="pb-16 pt-5">Thanks for stopping by ッ</p>
        <p>© 2024 Araby Hossain Abid. All Rights Reserved.</p>
      </aside>

      <nav className="text-center mx-auto">
        <h6 className="footer-title mx-auto">Links</h6>
        <ul>
          <li>
            <NavLink
              to="/about"
              className="transition-colors duration-300 hover:text-blue-500"
              aria-label="About page"
            >
              About
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink
              to="/work"
              className="transition-colors duration-300 hover:text-blue-500"
              aria-label="Work page"
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className="transition-colors duration-300 hover:text-blue-500"
              aria-label="Contacts page"
            >
              Contacts
            </NavLink>
          </li>
          <li className="pt-2">
            <NavLink
              to="/tech"
              className="transition-colors duration-300 hover:text-blue-500"
              aria-label="Tech Stack page"
            >
              Tech Stack
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav className="text-center mx-auto">
        <h6 className="footer-title">Elsewhere</h6>
        <ul>
          <li>
            <a
              className="link link-hover transition-colors duration-300 hover:text-blue-500"
              href="mailto:arabyhossainabid@gmail.com"
              aria-label="Email me"
            >
              Email
            </a>
          </li>
          <li className="py-2">
            <a
              className="link link-hover transition-colors duration-300 hover:text-blue-500"
              href="https://www.linkedin.com/in/araby-hossain-abid-6790a5318/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="link link-hover transition-colors duration-300 hover:text-blue-500"
              href="https://github.com/Abid-2743"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
          </li>
          <li className="pt-2">
            <a
              className="link link-hover transition-colors duration-300 hover:text-blue-500"
              href="https://x.com/AbidAraby"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter profile"
            >
              Twitter
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
