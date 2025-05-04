"use client"

import Image, { StaticImageData } from 'next/image';
import { useParams } from 'next/navigation';
import project1 from "@/assets/project1.png";

export type Project = {
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
    link: 'project1'
  },
  {
    banner: project1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce site with Stripe integration, Next.js API routes, and MongoDB.',
    link: 'project2'
  },
  {
    banner: project1,
    title: 'Open Source CLI Tool',
    description: 'A CLI tool for automating repetitive dev tasks, written in TypeScript and Node.js.',
    link: 'project3'
  }
];

const ProjectDetailsPage = () => {
  const { projectId } = useParams();

  const project = projects.find((proj) => proj.link === projectId);

  if (!project) {
    return <div className="p-6 text-red-500">Project not found.</div>;
  }

  return (
    <div className='bg-classicGold'>
      <div className="bg-lightGrey rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative w-full h-48">
          <Image src={project.banner} alt={project.title} layout="fill" objectFit="cover" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          {project.link && (
            <a
              href={`/projects/${project.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              View Project →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
