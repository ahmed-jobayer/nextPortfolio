import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3, FaGitAlt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMongoose, SiTailwindcss, SiVite } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

const Skills = () => {
    const skills = [
        {
          name: "Next.js",
          icon: RiNextjsFill, 
        },
        {
          name: "React",
          icon: FaReact,  
        },
        {
          name: "Mongoose",
          icon: SiMongoose,  
        },
        {
          name: "Redux",
          icon: TbBrandRedux,  
        },
        {
          name: "Typescript",
          icon: BiLogoTypescript, 
        },
        {
          name: "HTML5",
          icon: FaHtml5, 
        },
        {
          name: "CSS3",
          icon: FaCss3,  
        },
        {
          name: "Javascript",
          icon: IoLogoJavascript,  
        },
        {
          name: "Node.js",
          icon: FaNode,  
        },
        {
          name: "Express.js",
          icon: SiExpress,  
        },
        {
          name: "MongoDB",
          icon: SiMongodb,  
        },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,  
        },
        {
          name: "Vite",
          icon: SiVite,  
        },
        {
          name: "Git",
          icon: FaGitAlt,  
        },
        {
          name: "GitHub",
          icon: FaGithub,  
        },
      ];
    return (
        <div  className="container mx-auto p-2">
        <h2 className="text-center font-permanentMarker text-4xl mb-10">Skills</h2>
        <div className="grid grid-cols-4 lg:grid-cols-5 justify-between gap-8 gap-y-16 text-center">
          {skills.map((skill, i) => (
           <div key={i} className="flex flex-col items-center justify-center">
           <div className="text-6xl">
             {/* Render the icon component */}
             <skill.icon />
           </div>
           <p className="mt-2">{skill.name}</p>
         </div>
          ))}
        </div>
      </div>
    );
};
 
export default Skills;