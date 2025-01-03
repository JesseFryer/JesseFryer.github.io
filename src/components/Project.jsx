export default function Project({ project }) {
  return (
    <div className='w-full p-3 rounded-md border-2 border-gray-700 flex flex-col justify-start items-start space-y-2'>

      {/* Heading and GitHub link */}
      <div className='w-full text-blue-300 text-lg md:text-2xl flex justify-between items-center'>
        <h1>{project.heading}</h1>
        {project.github && <a className='fa-brands fa-github text-gray-200' href={project.github} target='_blank' rel='noopener noreferrer'></a>}
      </div>

      {/* Skills */}
      <h1 className='flex space-x-2 justify-start items-center'>
        {project?.skills.map((skill, index) => {return (
          <span key={index} className='text-gray-500 text-sm md:text-lg'>{"• "  + skill + " "}</span>
        )})}
      </h1>

      {/* Dividor */}
      <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-80 via-[1%]"></div>

      {/* Video and Description */}
      <div className='w-full flex-col space-y-3 flex justify-start items-center md:space-x-4 md:flex-row md:items-start md:space-y-0'>
        {/* Info */}
        <div className='w-[100%] md:w-[50%] flex flex-col justify-start items-start space-y-2'>
          {/* Description */}
          <p className='text-gray-400 md:text-lg'>{project.description}</p>
          {/* Features */}
          <p className='text-lg md:text-lg text-gray-200'>Features</p>
          <p className='grid grid-cols-2 gap-2 sm:gap-3'>
            {project?.features.map((feature, index) => {return (
              <span key={index} className='text-gray-400 text-sm md:text-lg'>{"• "  + feature + " "}</span>
            )})}
          </p>
          {/* Links */}
          <p className='text-lg md:text-lg text-gray-200'>Links</p>
          <div className='flex flex-col justify-start items-start space-y-1'>
            {project.links?.map((link, index) => {return (
              <a key={index} className='text-gray-400 text-sm md:text-lg' href={link.url} target='_blank' rel='noopener noreferrer'>{"🔗 "  + link.description}</a>
            )})}
          </div>
        </div>

        {/* Video */}
        <div className='w-[100%] md:w-[50%] bg-gray-900 p-2 space-y-2 rounded-md'>
          <p className='text-lg md:text-lg text-gray-200'>Showcase</p>
          <video src={project.videoPath} controls className='rounded-md'></video>
        </div>

      </div>

    </div>
  );
}