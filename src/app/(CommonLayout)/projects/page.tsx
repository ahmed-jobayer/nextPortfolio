import project1 from "@/assets/project1.png"
import ProjectCard from "@/components/shared/ProjectCard";
import { StaticImageData } from "next/image";

const ProjectPage = () => {

    type Project = {
        banner: StaticImageData;
        title: string;
        description: string;
        link?: string;
      };
      
      const projects: Project[] = [
        { 
          banner: project1,
          title: 'Portfolio Website',
          description: 'A personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.',
          link: '/projects/project1'
        },
        {
          banner: project1,
          title: 'E-commerce Platform',
          description: 'A full-stack e-commerce site with Stripe integration, Next.js API routes, and MongoDB.',
          link: '/projects/project2'
        },
        {
          banner: project1,
          title: 'Open Source CLI Tool',
          description: 'A CLI tool for automating repetitive dev tasks, written in TypeScript and Node.js.',
          link: '/projects/project3'
        }
      ];

    return (
        <div className="min-h-[70vh] px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
    
    <ProjectCard project={project} key={index}/>
          ))}
        </div>
      </div>
    );
};

export default ProjectPage;