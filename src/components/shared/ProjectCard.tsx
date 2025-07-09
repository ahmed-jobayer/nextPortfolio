
import { IProject } from "@/models/Projects";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <div className="bg-lightGrey rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image
          src={project.banner}
          alt={project.title}
          layout="fill" 
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        {project.link && (
          <Link className="font-medium" href={`/projects/${project._id}`}>
            {" "}
            <button className="flex items-center justify-center text-darkGrey cursor-pointer gap-1 px-2 py-1 tracking-widest rounded-md  duration-300 hover:gap-2 hover:translate-x-3">
              View Details
              <ArrowRight />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
