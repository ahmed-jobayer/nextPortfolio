import Image from "next/image";
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Image
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
        id="banner"
        className="relative z-10 grid grid-cols-2  h-full border border-classicGold text-offWhite"
      >
        {/* Text Section */}
        <div className="flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 font-permanentMarker">
            - I AM JOBAYER AHMED. FULL STACK DEVELOPER
          </h1>
          <p>
            I am a Bangladesh based web developer focused on
            crafting clean & user‑friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>
          <div className="flex text-3xl sm:text-4xl gap-4 sm:gap-6">
            <a
              className="hover:scale-125 duration-300"
              href="https://github.com/ahmed-jobayer"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="hover:scale-125 duration-300"
              href="https://www.linkedin.com/in/ahmed-jobayer/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="hover:scale-125 duration-300"
              href="https://x.com/ahmed__jobayer"
              target="_blank"
            >
              <FaSquareXTwitter />
            </a>
          </div>
        </div>

        {/* React Logo */}
        <div className="hidden sm:flex items-center justify-center mt-12 md:mt-0">
          <FaReact className="animate-spin-slow text-[#61DBFB]" size={180} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
