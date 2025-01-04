import React, { useState } from 'react';
import Project from './components/Project';
import projects from './projects.json';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(0);

  const changeSelectedProject = (dir) => {
    let newProject = selectedProject + dir;
    if (newProject < 0) {
      newProject = projects.length - 1;
    } else if (newProject >= projects.length) {
      newProject = 0;
    }
    setSelectedProject(newProject);
  }

  return (
    // Main container
    <div className='w-full flex justify-center items-start'>
      {/* Capped width container to hold all content */}
      <div className='w-full max-w-7xl flex flex-col justify-start items-center space-y-4 px-4 py-8'>

        <div className='flex space-x-6 justify-center items-center'>
          {/* Headshot*/}
          <img src='/images/MyHead.jpg' className='size-24 rounded-full'></img>

          <div className='flex flex-col space-y-2 justify-center items-start'>
            {/* Heading */}
            <h1>
              <span className='text-2xl text-gray-400'>Hi I'm </span>
              <span className='text-3xl font-bold text-gray-300'>Jesse</span>
            </h1>

            {/* Subheading */}
            <p>
              <span className='text-xl text-gray-400'>A passionate </span>
              <span className='text-2xl text-blue-300'>Full Stack</span>
              <span className='text-xl text-gray-400'> developer</span>
            </p>
          </div>
        </div>

        {/* Download CV */}
        <a className='flex space-x-2 justify-center items-center' href='/files/cv.pdf' target='_blank' rel='noopener noreferrer'>
          <i className="fa-solid fa-download text-gray-300 text-lg"></i>
          <p className='text-gray-300 text-lg'>cv</p>
        </a>

        {/* Dividor */}
        <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-50 via-[50%]"></div>

        {/* Portfolio*/}
        <div className='flex w-full justify-center items-center space-x-4'>
          <button className='text-gray-500 text-4xl' onClick={() => changeSelectedProject(-1)}>{'<'}</button>
          <h1 className='text-lg md:text-2xl text-gray-300'>Portfolio</h1>
          <button className='text-gray-500 text-4xl' onClick={() => changeSelectedProject(1)}>{'>'}</button>
        </div>
        <p className='text-gray-500 text-md md:text-lg'>{selectedProject + 1}/{projects.length}</p>
        <Project project={projects[selectedProject]}/>

      </div>
    </div>
  );
};