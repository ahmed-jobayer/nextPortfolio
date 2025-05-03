"use client";
import {
  Brain,
  BriefcaseBusiness,
  CircleUser,
  Home,
  LucideIcon,
  Send,
} from "lucide-react";
import NavButton from "./butttons/navButton/NavButton";
import { useState, useEffect, RefObject } from "react";

type SectionRefs = Record<string, RefObject<HTMLElement | null>>;

interface NavbarProps{
  sectionRefs:SectionRefs
}

const Navbar : React.FC<NavbarProps> = ({ sectionRefs }) => {
  const [activeSection, setActiveSection] = useState("home");

  // Array of navigation items
  const navLinks: { id: string; icon: LucideIcon; label: string }[] = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: CircleUser, label: "About" },
    { id: "skills", icon: Brain, label: "Skills" },
    { id: "projects", icon: BriefcaseBusiness, label: "Projects" },
    { id: "contact", icon: Send, label: "Contact" },
  ];

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better UX

      // Check which section is currently in view
      Object.entries(sectionRefs).forEach(([id, ref]) => {
        const element = ref.current;
        if (!element) return;

        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial active section
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRefs]);

  // Function to handle click and scroll to section
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: keyof SectionRefs) => {
    e.preventDefault();
    const section = sectionRefs[id].current;
    
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="fixed top-1/4 right-2 z-20 w-[125px] flex justify-end">
      <div className="flex flex-col gap-4 mt-4 items-end">
        {navLinks.map(({ id, icon, label }, i) => (
          <a 
            href={`#${id}`}
            key={i}
            onClick={(e) => handleNavClick(e, id)}
            className="flex justify-end w-full"
          >
            <NavButton
              icon={icon}
              label={label}
              className={activeSection === id ? "!bg-classicGold !text-mutedGrey" : ""}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;