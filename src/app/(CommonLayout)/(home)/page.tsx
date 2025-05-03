"use client";
import { RefObject, useRef } from "react";
import HeroSection from "@/components/shared/HeroSection";
import AboutMe from "@/components/shared/AboutMe";
import Projects from "@/components/shared/Projects";
import ContactMe from "@/components/shared/ContactMe";
import Navbar from "@/components/shared/Navbar";
import Skills from "@/components/shared/Skills";

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
    skills:skillsRef,
    projects: projectsRef,
    contact: contactRef,
  };

  return (
    <div className="text-lightGrey">
      <Navbar sectionRefs={sectionRefs} />
      <section ref={heroRef} id="home" className="min-h-screen">
        <HeroSection />
      </section>
      <section ref={aboutRef} id="about" className="min-h-screen">
        <AboutMe />
      </section>
      <section ref={skillsRef} id="skills" className="min-h-screen">
        <Skills />
      </section>
      <section ref={projectsRef} id="projects" className="min-h-screen">
        <Projects />
      </section>
      <section ref={contactRef} id="contact" className="min-h-screen">
        <ContactMe />
      </section>
    </div>
  );
};

export default HomePage;
