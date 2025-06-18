import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-richBlack  py-5 border-t-[1px] border-cardBg z-10 ">
      <p className="text-center text-xs  text-lightGrey ">
        <span className="flex justify-center items-center">
          Developed with <Heart className="mx-1" size={15} /> by Jobayer Ahmed
        </span>{" "}
        © {currentYear} All rights reserved
      </p>
    </div>
  );
};

export default Footer;
