import React from 'react'
import { FaCode, FaFileImage, FaGithub, FaImage, FaImages, FaLink, FaRegFileImage, FaRegImage, FaRegImages } from 'react-icons/fa'

const ProjectCard = ({ 
  imageUrl, 
  liveURL, 
  githubLink, 
  techStack, 
  description,
  startDate,
  endDate,
  title
}) => {
  // Format date range
  const formatDateRange = (start, end) => {
    const startFormatted = new Date(start).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    const endFormatted = new Date(end).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    return `${startFormatted} - ${endFormatted}`;
  };

  if(!title) return null;

  return (
    <div className="shadow-gray-400  shadow-lg group relative w-full h-80 rounded-xl overflow-hidden cursor-pointer">
      {/* Project Image with Overlay Effect */}
      <div className="absolute inset-0 w-full h-full">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt="Project Preview" 
            className="w-full h-full  object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className='w-full h-full flex justify-center items-center'>
            <FaRegImage size={180}/>
          </div>
        )}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
      </div>
      
      {/* Title Header */}
      <div className="absolute top-0 left-0 w-full 
        transform transition-transform duration-500 
        group-hover:-translate-y-full z-10
        bg-yellow-400 p-4">
        <h3 className="text-xl font-extrabold text-gray-800 text-center">
          {title}
        </h3>
      </div>
      
      {/* Project Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end 
        transform translate-y-full group-hover:translate-y-0 
        transition-transform duration-500 ease-in-out">
        
        {/* Project Content with Yellow Background */}
        <div className="bg-yellow-400 max-h-80 overflow-scroll scrollbar-none p-6 ">
          {/* Project Action Buttons */}
          <div className="absolute top-4 right-4 flex space-x-2">
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            {liveURL && (
              <a 
                href={liveURL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-500 transition-colors"
              >
                <FaLink className="w-5 h-5" />
              </a>
            )}
          </div>

          {/* Project Details */}
          <div>
          <h3 className="text-xl font-extrabold text-gray-800 ">
          {title}
        </h3>
            {startDate && endDate && (
              <p className="text-sm text-gray-500 mb-4">
                {formatDateRange(startDate, endDate)}
              </p>
            )}

            {/* Tech Stack Badges */}
            {techStack && techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-blue-100 bg-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                  >
                    {tech.title}
                  </span>
                ))}
              </div>
            )}

            {/* Project Description */}
            {description && description.length > 0 && (
              <ul className="list-disc list-inside max-h-[168px] scrollbar-none overflow-y-scroll text-gray-600 space-y-2">
                {description.map((item, index) => (
                  <li key={index} className="text-sm font-semibold">{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const Projects = ({projectData}) => {
  return (
    <div id='project' className=" scroll-mt-20 flex flex-col gap-6  m-7">
    <div className='font-bold text-4xl flex gap-2 font-poppins justify-center items-center my-4'><FaCode/> <span>My</span> <span className='text-orange-500'>Projects</span></div>
    <div className='grid grid-cols-2 gap-3 w-full max-w-screen-lg mx-auto'>

     {
       projectData.map(project => 
        <ProjectCard
        description={project.description}
          endDate={project.endDate || "Present"}
          startDate={project.startDate}
          githubLink={project.githubLink}
          imageUrl={project.imageUrl[0]}
          liveURL={project.liveURL}
          techStack={project.techStack}
          title={project.title}
          key={project.title}
        />
      )
    }
    </div>
    </div>
  )
}

export default Projects