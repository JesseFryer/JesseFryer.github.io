import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ logoText, navLinks }) => {
  const location = useLocation();
  
  // State to manage menu visibility and download state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  // Handle resume download
  const handleResumeClick = () => {
    setIsDownloaded(true);
    setTimeout(() => {
      setIsDownloaded(false);
    }, 1000);
  };

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#131316] text-white p-4 w-full sticky top-0 z-50">
      <div className="pl-2 pr-2 flex justify-between items-center">
        {/* Left-aligned logo */}
        <div className="flex items-center space-x-6">
          <Link to="/">
            <h1 className="text-2xl hover:text-white transition duration-100 text-yellow-600 font-extrabold">{logoText}</h1>
          </Link>
        </div>

        {/* Navigation links for larger screens */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <li key={index} className={location.pathname === link.path ? "text-gray-400" : ""}>
                <Link to={link.path} className="hover:text-white text-gray-300 font-semibold transition duration-100">
                  {link.text}
                </Link>
              </li>
            ))}
            {/* Resume button */}
            <li>
              <a 
                href="/files/resume.pdf"
                download="Jesse_Fryer_Resume.pdf"
                onClick={handleResumeClick}
                className="hover:text-white text-gray-300 font-semidbold transition duration-100"
              >
                <span>resume </span>
                <span>
                  {isDownloaded ? (
                    <i className="fa-solid fa-check-to-slot"></i>
                  ) : (
                    <i className="fa-solid fa-download"></i>
                  )}
                </span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger icon for mobile view */}
        <div className="md:hidden">
          <i onClick={toggleMenu} className="text-gray-300 hover:text-white transition-colors duration-100 fa-solid fa-bars fa-lg"></i> {/* Hamburger icon */}
        </div>

        {/* Pull-out tray menu for mobile */}
        <div
          className={`fixed top-0 right-0 w-1/3 h-full bg-black shadow-lg z-50 p-2 transition-transform duration-200 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close button for mobile menu */}
          <i onClick={toggleMenu} className="text-gray-300 hover:text-white fa-solid fa-times fa-lg"></i> {/* Close icon */}
          
          <ul className="flex flex-col space-y-6 mt-2">
            {navLinks.map((link, index) => (
              <li key={index} className={location.pathname === link.path ? "text-gray-400" : ""}>
                <Link
                  to={link.path}
                  className="hover:text-white text-gray-300 font-semibold transition duration-300"
                  onClick={toggleMenu} // Close the menu when a link is clicked
                >
                  {link.text}
                </Link>
              </li>
            ))}
            {/* Resume button in mobile menu */}
            <li>
              <a 
                href="/files/resume.pdf"
                download="Jesse_Fryer_Resume.pdf"
                onClick={handleResumeClick}
                className="hover:text-white text-gray-300 font-semibold transition duration-300"
              >
                <span className="font-semibold">resume </span>
                <span>
                  {isDownloaded ? (
                    <i className="fa-solid fa-check-to-slot"></i>
                  ) : (
                    <i className="fa-solid fa-download"></i>
                  )}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
