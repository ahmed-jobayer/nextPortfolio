import { Project } from "@/app/(CommonLayout)/projects/[projectId]/page";
import Image from "next/image";

const ProjectCard = ({project}:{project: Project}) => {
    return (
        <div  className="bg-lightGrey rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative w-full h-48">
          <Image src={project.banner} alt={project.title} layout="fill" objectFit="cover" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          {project.link && (
            <a
              href={project.link} 
            
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              View Project →
            </a>
          )}
        </div>
      </div>
    );
};

export default ProjectCard;