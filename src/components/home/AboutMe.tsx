import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";
const AboutMe = () => {
  return (
    <div className=" ">
      <div className="container mx-auto ">
        <SectionHeading title="ABOUT ME" />
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 bg-">
          <div className="flex justify-center items-center order-2 lg:order-1 ">
            <p className="max-w-[450px] text-center ">
              <span className="mb-5 text-2xl font-semibold">
                I am a MERN Stack Developer.
              </span>
              <br />I enjoy designing and building complete web applications,
              from crafting responsive frontends in Next.js and MERN. I
              continuously strive to enhance my skills by taking on challenging
              projects that combine functionality, scalability, and clean code..
            </p>
          </div>
          <div className="flex justify-center items-center order-1 lg:order-2 min-h-[75vh] rounded-md bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 p-4 shadow-inner">
            <div className="relative w-[90%] h-[90%] overflow-hidden border-4 border-gray-200/10 rounded-2xl shadow-md transform hover:shadow-2xl ">
              <Image
                className="rounded-2xl" 
                alt="Jobayer Ahmed Photo"
                src="/assets/jobayer.jpg"
                fill
                style={{ 
                  objectFit: "cover",
                  objectPosition: "center",
                  filter: "brightness(1.05) contrast(1.05)"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
