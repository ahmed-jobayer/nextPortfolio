import ProjectCard from "@/components/shared/ProjectCard";
import SectionHeading from "@/components/shared/SectionHeading";

const ProjectPage = () => {

    type Project = {
        banner: string;
        title: string;
        description: string;
        link?: string;
      };
      
      const projects: Project[] = [
        { 
          banner: "/assets/project1.png",
          title: 'Portfolio Website',
          description: 'A personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.',
          link: '/projects/project1'
        },
        {
          banner: "/assets/project1.png",
          title: 'E-commerce Platform',
          description: 'A full-stack e-commerce site with Stripe integration, Next.js API routes, and MongoDB.',
          link: '/projects/project2'
        },
        {
          banner: "/assets/project1.png",
          title: 'Open Source CLI Tool',
          description: 'A CLI tool for automating repetitive dev tasks, written in TypeScript and Node.js.',
          link: '/projects/project3'
        } 
      ];

    return (
        <div className="min-h-[70vh] px-6 py-12">
        <SectionHeading title="PROJECTS"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
              <ProjectCard project = {project} key={index}/>
    
          ))}
        </div>
      </div>
    );
};

export default ProjectPage;