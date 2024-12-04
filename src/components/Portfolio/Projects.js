import React from 'react'
import { FaCode, FaGithub, FaLink } from 'react-icons/fa'
import { formatDateRange } from '../../utils/dateFormatter';

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

  return (
    <div className=" scroll-mt-20 group relative w-full h-80 rounded-xl overflow-hidden cursor-pointer">
      {/* Project Image with Overlay Effect */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={imageUrl} 
          alt="Project Preview" 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
      </div>
      
      {/* Project Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end 
        transform translate-y-full group-hover:translate-y-0 
        transition-transform duration-500 ease-in-out">
        
        {/* Project Content with Yellow Background */}
        <div className="bg-yellow-400 p-6">
          {/* Project Action Buttons */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href={liveURL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-500 transition-colors"
            >
              <FaLink className="w-5 h-5" />
            </a>
          </div>

          {/* Project Details */}
          <div>
            {/* Project Title and Date */}
            <div className="mb-4">
              <h3 className="text-xl font-extrabold text-gray-800 mb-1">{title}</h3>
              <p className="text-sm text-gray-500">
                {formatDateRange(startDate, endDate)}
              </p>
            </div>

            {/* Tech Stack Badges */}
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

            {/* Project Description */}
            <ul className="list-disc list-inside max-h-[168px] scrollbar-none overflow-y-scroll  text-gray-600 space-y-2">
              {description.map((item, index) => (
                <li key={index} className="text-sm font-semibold">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = ({projectData}) => {
  return (
    <div className="flex flex-col gap-6  m-7">
    <div className='font-bold text-4xl flex gap-2 font-poppins justify-center items-center my-4'><FaCode/> <span>Projects</span></div>
    <div className='grid grid-cols-2 gap-3 w-full max-w-screen-lg mx-auto'>

     {
       projectData.map(project => 
        <ProjectCard
        description={project.description}
          endDate={project.endDate}
          startDate={project.startDate}
          githubLink={project.githubLink}
          imageUrl={project.imageUrl}
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