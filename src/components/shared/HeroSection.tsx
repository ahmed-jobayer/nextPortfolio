import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import developer from "@/assets/developer.png";
import CvButton from "./butttons/cvButton/CvButton";
import { Download, ScanEye } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {
  return (
    <div className="w-full min-h-screen border">
      <div className="absolute inset-0">
        <Image
          className="z-10 brightness-50"
          alt="Hero Image"
          src="https://i.ibb.co/tW2ZJnt/hero-dark.jpg"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      {/* Content container */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2   text-offWhite items-center  h-screen ">
        {/* Text Section */}
        <div className="flex flex-col items-center justify-center text-center px-2">
          <h1 className=" mb-4">
            <span className="text-classicGold text-3xl font-semibold md:text-5xl">
              -I AM JOBAYER AHMED.
            </span>{" "}
            <br />{" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "FULL STACK DEVELOPER IN NEXT.js",
                1000,
                "FULL STACK DEVELOPER IN MERN",
                1000,
              ]}
              speed={10}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
          </h1>
          <p className=" w-2/3 mb-5 text-lightGrey">
            I am a Bangladesh based web developer focused on crafting clean &
            user‑friendly experiences, I am passionate about building excellent
            software that improves the lives of those around me.
          </p>
          <div className="flex gap-10 my-10 flex-col lg:flex-row  ">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <CvButton className=" " label="Preview CV" icon={ScanEye} />
            </a>
            <a
              href="/resume.pdf"
              download="Full Stack Developer Resume of Jobayer Ahmed"
            >
              <CvButton className="" label="Download CV" icon={Download} />
            </a>
          </div>
          <div className="flex text-3xl sm:text-4xl gap-4 sm:gap-6 text-lightGrey">
            <a
              className="hover:scale-125 duration-300 "
              href="https://github.com/ahmed-jobayer"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="hover:scale-125 duration-300 "
              href="https://www.linkedin.com/in/ahmed-jobayer/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="hover:scale-125 duration-300 "
              href="https://x.com/ahmed__jobayer"
              target="_blank"
            >
              <FaSquareXTwitter />
            </a>
          </div>
        </div>

        {/* image */}
        <div className=" hidden lg:flex items-center justify-center brightness-75">
          <div className=" w-3/4 h-3/4">
            <Image
              className=""
              alt="Jobayer Ahmed Photo"
              src={developer}

              // width={300}
              // height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
