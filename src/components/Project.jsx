import { AnimatePresence, motion } from "framer-motion";

export default function Project({ project, enterDirection }) {
  return (
    <AnimatePresence key={project.heading}>
      <motion.div 
        className='w-full p-3 rounded-md border-2 border-gray-700 flex flex-col justify-start items-start space-y-3'
        initial={{ x: enterDirection === 1 ? "25%" : "-25%" }}
        animate={{ x: "0%" }}
      >

        {/* Heading and GitHub link */}
        <div className='w-full text-blue-300 flex justify-between items-center'>
          <h1 className="text-xl">{project.heading}</h1>
          {project.github && <a className='fa-brands fa-github text-gray-200 text-xl' href={project.github} target='_blank' rel='noopener noreferrer'></a>}
        </div>

        {/* Dividor */}
        <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-80 via-[1%]"></div>

        {/* Project information */}
        <div className='w-full flex flex-col space-y-3 justify-start items-center md:flex-row md:space-x-4 md:items-start md:space-y-0'>
          <div className='w-[100%] md:w-[50%] flex flex-col justify-start items-start space-y-2'>

            {/* Tech stack */}
            <h1 className='flex flex-col space-y-1 justify-start items-start'>
              <div className="flex space-x-2 justify-start items-center">
                <i className="fa-solid fa-layer-group text-gray-200 text-lg"></i>
                <p className="text-gray-200 font-bold text-lg">Stack</p>
              </div>
              <p className="flex justify-start items-center space-x-2">
                {project?.skills.map((skill, index) => {return (
                  <span key={index} className='text-gray-400 text-normal md:text-lg'>{"• "  + skill + " "}</span>
                )})}
              </p>
            </h1>

            <p className='text-lg md:text-lg text-gray-200 font-bold'>Summary</p>
            {/* Description */}
            <p className='text-gray-400 md:text-lg'>{project.description}</p>
            {/* Features */}
            <p className='text-lg md:text-lg text-gray-200 font-bold'>Features</p>
            <p className='grid grid-cols-2 gap-2 sm:gap-3'>
              {project?.features.map((feature, index) => {return (
                <span key={index} className='text-gray-400 text-sm md:text-lg'>{"• "  + feature + " "}</span>
              )})}
            </p>
            {/* Links */}
            <p className='text-lg md:text-lg text-gray-200 font-bold'>Links</p>
            <div className='flex flex-col justify-start items-start space-y-1'>
              {project.links?.map((link, index) => {return (
                <a key={index} className='text-gray-400 text-normal md:text-lg' href={link.url} target='_blank' rel='noopener noreferrer'>{"🔗 "  + link.description}</a>
              )})}
            </div>
          </div>

          {/* Video */}
          <div className='w-[100%] md:w-[50%] p-2 space-y-2 rounded-md bg-gray-900 flex flex-col justify-start items-start'>
            <p className='text-lg md:text-lg text-gray-200 font-bold'>Showcase</p>
            <video src={project.videoPath} controls className='rounded-md'></video>
          </div>

        </div>

      </motion.div>
    </AnimatePresence>
  );
}