import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import SectionHeading from "../shared/SectionHeading";

const ContactMe = () => { 
  return (
    <div className=" min-h-[70vh] container mx-auto ">
      <SectionHeading title="CONTACCT"/>
      {/* Main content */}
      <div className="flex flex-col gap-10 lg:flex-row w-full lg:justify-between lg:items-center">
        {/* Left Section */}
        <div className="lg:w-1/2 font-poiretOne  flex flex-col">
          <div className="text-7xl font-bold">
            <h1 className="">Want me </h1>
            <h1 className="text-center">to join your</h1>
            <h1 className="text-end"> team?</h1>
          </div>
          <p className="mt-6 text-lg text-end ">Or just say hello.</p>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2  ">
          <div className="flex flex-col space-y-8 items-center">
            {/* Contact Info */}
            <div className="text-[#AEA7AA]">
              <a
                href="mailto: jobayerahm7@gmail.com"
                className="text-xl font-medium  pb-1 border-b"
              >
                jobayerahm7@gmail.com
              </a>
              <div className="flex items-center mt-2 text-lg">
                <FaPhoneAlt />
                <span className="mx-1">&</span>
                <FaWhatsappSquare className="mr-2" />
                +8801580320721
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 text-4xl">
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
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
