import jobayerImg from "@/assets/jobayer.png";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
const AboutMe = () => {
  return ( 
    <div className="">
      <div className="container mx-auto">
        <SectionHeading title="ABOUT ME" />
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
          <div className="flex justify-center items-center order-2 lg:order-1">
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
          <div className="flex justify-center order-1 lg:order-2">
            <div className="avatar ">
              <div className=" w-[240px] rounded-full ">
                <Image
                  className=""
                  alt="Jobayer Ahmed Photo"
                  src={jobayerImg}
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
