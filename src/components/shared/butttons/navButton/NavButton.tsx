import { LucideIcon } from "lucide-react";
import "./navButton.css"

interface NavButtonProps {
  icon: LucideIcon;
  label : string;
  className?: string
}

const NavButton: React.FC<NavButtonProps>= ({icon:Icon, label, className=''}) => {
  return (
    <button className={`Btn text-offWhite ${className} `}>
    <div className="sign">
      <Icon size={17}  />
    </div>
    <div className="text">{label}</div>
  </button>
  );
};

export default NavButton;
