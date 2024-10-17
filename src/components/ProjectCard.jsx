import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="pt-1 pb-1 pl-2 pr-2 mt-4 bg-gray-700 items-center shadow-lg rounded-lg flex flex-col">
      <div className="p-2 pl-4 pr-4 flex justify-between items-center w-full">
        {/* Heading sticks to the left */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 flex-grow">
          <span className="text-yellow-600 font-semibold">{project.heading}</span>
        </h2>
        {/* GitHub icon sticks to the right */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="fa-brands fa-github text-xl text-gray-300 hover:text-white transition-colors duration-300"
          >
          </a>
        )}
      </div>

      {/* Symmetrical tapered divider line */}
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50 mb-4"></div>

      {/* Ensure the video is centered horizontally and vertically */}
      <div className="w-[100%] lg:w-[60%] bg-gray-700 p-2 flex justify-center items-center rounded-lg">
        <video className="w-auto rounded-lg border-yellow-900 border-2 m-2 ml-4 mr-4" autoPlay loop muted>
          <source src={project.videoPath} type="video/mp4" />
        </video>
      </div>
      
      <p className="text-sm sm:text-base text-center m-2 mb-4 text-gray-400 font-regular">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
