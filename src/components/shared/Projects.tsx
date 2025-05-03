import Image, { StaticImageData } from "next/image";
import project1 from "@/assets/project1.png"

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
    link: 'https://bicyclestore.netlify.app'
  },
  {
    banner: project1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce site with Stripe integration, Next.js API routes, and MongoDB.',
    link: 'https://ecommerce-demo.com'
  },
  {
    banner: project1,
    title: 'Open Source CLI Tool',
    description: 'A CLI tool for automating repetitive dev tasks, written in TypeScript and Node.js.',
    link: 'https://github.com/yourcli'
  }
];

const Projects = () => {
  return (
    <section className="min-h-[70vh] px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-lightGrey rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-48">
              <Image src={project.banner} alt={project.title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
