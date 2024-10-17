import { React, useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import Carousel from '../components/Carousal';
import Histogram from '../components/Histogram';

const Projects = ({ projects }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentSkills, setCurrentSkills] = useState(projects[0]?.skills || {}); // Initialize with first project's skills

  useEffect(() => {
    // Update skills when the project index changes
    setCurrentSkills(projects[currentProjectIndex]?.skills || {});
  }, [currentProjectIndex, projects]);

  const handleCarouselChange = (index) => {
    setCurrentProjectIndex(index);
    setCurrentSkills(projects[index].skills);
  };

  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center px-4 sm:px-8">
      <div className="lg:w-[20%] w-[50%]">
        <Histogram skills={currentSkills} />
      </div>

      <div className="lg:w-[50%] w-[90%]">
        <Carousel
          items={projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
          onChange={handleCarouselChange}
        />
      </div>
    </section>
  );
};

export default Projects;
