"use client";

import HeroSection from "@/components/shared/HeroSection";
import AboutMe from "@/components/shared/AboutMe";
import Projects from "@/components/shared/Projects";
import ContactMe from "@/components/shared/ContactMe";
import Navbar from "@/components/shared/Navbar";
import Skills from "@/components/shared/Skills";
import background from "@/assets/background.jpg";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="text-lightGrey">
      <Navbar />

      {/* Hero Section with its own background */}
      <section id="home" className="">
        <HeroSection />
      </section>

      {/* Start background image AFTER HeroSection */}
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

        <section id="about" className="min-h-screen flex justify-center items-center">
          <AboutMe />
        </section>

        <div className="divide-y-4 divide-classicGold" />

        <section id="skills" className="min-h-screen flex justify-center items-center">
          <Skills />
        </section>

        <section id="projects" className="min-h-screen flex justify-center items-center">
          <Projects />
        </section>

        <section id="contact" className="min-h-screen flex justify-center items-center">
          <ContactMe />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
