import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import developer from "@/assets/developer.png";
const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
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
      <div
      
        className="relative z-10 grid grid-cols-1 lg:grid-cols-2  h-full text-offWhite"
      >
        {/* Text Section */}
        <div className="flex flex-col items-center justify-center text-center px-2">
          <h1 className="text-5xl md:text-3xl mb-4 text-lightGrey">
            <span className="text-classicGold text-5xl font-bold">
              - I AM JOBAYER AHMED.
            </span>{" "}
            <br /> FULL STACK DEVELOPER
          </h1>
          <p className="w-2/3 mb-5 text-lightGrey">
            I am a Bangladesh based web developer focused on crafting clean &
            user‑friendly experiences, I am passionate about building excellent
            software that improves the lives of those around me.
          </p>
          <div className="flex text-3xl sm:text-4xl gap-4 sm:gap-6 ">
            <a
              className="hover:scale-125 duration-300 hover:text-classicGold"
              href="https://github.com/ahmed-jobayer"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="hover:scale-125 duration-300 hover:text-classicGold"
              href="https://www.linkedin.com/in/ahmed-jobayer/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="hover:scale-125 duration-300 hover:text-classicGold"
              href="https://x.com/ahmed__jobayer"
              target="_blank"
            >
              <FaSquareXTwitter />
            </a>
          </div>
        </div>

        {/* image */}
        <div className=" hidden lg:flex items-center justify-center">
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
