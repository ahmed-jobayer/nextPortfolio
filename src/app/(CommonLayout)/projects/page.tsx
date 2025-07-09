"use client";

import ProjectCard from "@/components/shared/ProjectCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { fetchProjects } from "@/lib/api";
import { useEffect, useState } from "react";
import { IProject } from "@/models/Projects";

const ProjectPage = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  console.log(projects);
  console.log(projects);

  const fetchAllProjects = async () => {
    try {
      const res = await fetchProjects();
      setProjects(res);
    } catch (error) {
      console.error("Failed to fetch projects", error);
    }
  };

  useEffect(() => {
    fetchAllProjects();
  }, []);

  if (!projects || projects.length === 0) {
    return <div className="text-center py-8">No projects found.</div>;
  }

  return (
    <div className="min-h-[70vh] px-6 py-12  w-full">
      <SectionHeading title="PROJECTS" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={project._id || index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
