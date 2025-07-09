"use client";

import HeroSection from "@/components/shared/HeroSection";
import AboutMe from "@/components/shared/AboutMe";
import ContactMe from "@/components/shared/ContactMe";
import Navbar from "@/components/shared/Navbar";
import Skills from "@/components/shared/Skills";
import ProjectPage from "../projects/page";

const HomePage = () => {
  return (
    <div className="text-lightGrey mb-16 container mx-auto">
      <Navbar />

      {/* Hero Section with its own background */}
      <section id="home">
        <HeroSection />
      </section>

      <section
        id="about"
        className=" flex justify-center items-center min-h-[90vh]"
      >
        <AboutMe />
      </section>

      <section
        id="skills"
        className="min-h-[85vh] flex justify-center items-center"
      >
        <Skills />
      </section>

      <section
        id="projects"
        className="min-h-[85vh] flex justify-center items-center"
      >
      <ProjectPage />
      </section>

      <section
        id="contact"
        className="min-h-[85vh] flex justify-center items-center"
      >
        <ContactMe />
      </section>
    </div>
  );
};

export default HomePage;



