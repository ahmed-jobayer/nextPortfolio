"use client";
import { RefObject, useRef } from "react";
import HeroSection from "@/components/shared/HeroSection";
import AboutMe from "@/components/shared/AboutMe";
import Projects from "@/components/shared/Projects";
import ContactMe from "@/components/shared/ContactMe";
import Navbar from "@/components/shared/Navbar";
import Skills from "@/components/shared/Skills";
import background from "@/assets/background.jpg";
import Image from "next/image";

type SectionRefs = Record<string, RefObject<HTMLElement | null>>;

const HomePage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sectionRefs: SectionRefs = {
    home: heroRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef,
  };

  return (
    <div className="text-lightGrey">
      <Navbar sectionRefs={sectionRefs} />
      <section ref={heroRef} id="home" className="min-h-screen">
        <HeroSection />
      </section>
      <div className="relative z-0">
        <div className="fixed inset-0 -z-10 brightness-50">
          <Image
            alt="Background Image"
            src={background}
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        <section ref={aboutRef} id="about" className="min-h-screen">
          <AboutMe />
        </section>
        <div className= " divide-y-4 divide-classicGold"></div>
        <section ref={skillsRef} id="skills" className="min-h-screen">
          <Skills />
        </section>
        <section ref={projectsRef} id="projects" className="min-h-3/4">
          <Projects />
        </section>
        <section ref={contactRef} id="contact" className="min-h-3/4">
          <ContactMe />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
