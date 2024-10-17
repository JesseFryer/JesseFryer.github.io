import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ logoText, navLinks }) => {
  const location = useLocation();
  
  // State to manage icon
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleResumeClick = () => {
    // Change icon when clicked
    setIsDownloaded(true);

    // Reset icon back after 1 second
    setTimeout(() => {
      setIsDownloaded(false);
    }, 1000);
  };

  return (
    <header className="bg-black text-white p-4 w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left-aligned logo */}
        <div className="flex-none">
          <Link to="/">
            <h1 className="text-2xl hover:text-white transition duration-300 text-yellow-600 font-extrabold">{logoText}</h1>
          </Link>
        </div>

        {/* Navigation links */}
        <div className="flex-grow text-center">
          <nav>
            <ul className="inline-flex space-x-6">
              {navLinks.map((link, index) => (
                <li key={index} className={location.pathname === link.path ? "text-gray-400" : ""}>
                  <Link to={link.path} className="hover:text-white text-gray-300 font-medium transition duration-300">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right-aligned button */}
        <div className="flex-none ml-auto">
          <a 
            href="/files/resume.pdf" // Update this path to your resume's file path
            download="Jesse_Fryer_Resume.pdf" // Custom filename for download
            onClick={handleResumeClick} 
            className="hover:text-white text-gray-300 font-semidbold rounded transition duration-300"
          >
            <span>resume </span>
            <span>
              {/* Conditional rendering of the icon */}
              {isDownloaded ? (
                <i className="fa-solid fa-check-to-slot"></i>
              ) : (
                <i className="fa-solid fa-download"></i>
              )}
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;