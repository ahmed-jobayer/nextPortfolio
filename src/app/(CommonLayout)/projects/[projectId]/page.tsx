"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { useParams } from "next/navigation";
import project1 from "@/assets/project1.png";
import { FiGithub } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";

import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CvButton from "@/components/shared/butttons/cvButton/CvButton";

export type Project = {
  banner: StaticImageData;
  title: string;
  description: string;
  link?: string;
};

const projects: Project[] = [
  {
    banner: project1,
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
    link: "project1",
  },
  {
    banner: project1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce site with Stripe integration, Next.js API routes, and MongoDB.",
    link: "project2",
  },
  {
    banner: project1,
    title: "Open Source CLI Tool",
    description:
      "A CLI tool for automating repetitive dev tasks, written in TypeScript and Node.js.",
    link: "project3",
  },
];

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const project = projects.find((proj) => proj.link === projectId);

  if (!project) {
    return <div className="p-6 text-red-500">Project not found.</div>;
  }

  return (
    <div className=" min-h-screen text-lightGrey">
      <div className="container mx-auto p-4">
        <p className="py-4 flex gap-2">
          <Link href={"/"}>
            <button
              type="button"
              className="cursor-pointer text-center w-36 rounded-2xl h-8 relative text-xl font-semibold border-2 border-darkGrey group"
            >
              <div className="bg-mutedGrey  rounded-xl h-[28px] w-1/3 grid place-items-center absolute left-0 top-0 group-hover:w-full group-hover:text-classicGold z-10 duration-500">
                <ArrowLeft />
              </div>
              <p className="translate-x-4 text-classicGold">Go Back</p>
            </button>
          </Link>
        </p>
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-[65vh]"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className=" min-h-[65vh]">
                <div className="p-1 ">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <Image
                        alt=""
                        fill={true}
                        objectFit="Cover"
                        src="https://res.cloudinary.com/djqafy9do/image/upload/v1750067875/cld-sample-4.jpg"
                      ></Image>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className=" grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
          <div className="col-span-12 flex justify-between">
            <h2>Smart Rental & Housing Solution</h2>
            <p className="flex gap-4">
              <CvButton className="!px-2" icon={GoLinkExternal} label="Live Link" />
              <CvButton icon={FiGithub} label="Frontend Code" />
              <CvButton icon={FiGithub} label="Backend Code" />
            </p>
          </div>
          <div className="col-span-7 ">ddd</div>
          <div className="col-span-5 ">afd</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
