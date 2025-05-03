"use client";
import {
  BriefcaseBusiness,
  CircleUser,
  Home,
  LucideIcon,
  Send,
} from "lucide-react";
import NavButton from "./butttons/navButton/NavButton";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const navLinks: { href: string; icon: LucideIcon; label: string }[] = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/about", icon: CircleUser, label: "About" },
    { href: "/projects", icon: BriefcaseBusiness, label: "Projects" },
    { href: "/contact", icon: Send, label: "Contact" },
  ];

  return (
    <div className="flex justify-center  fixed top-0 z-20 border w-full">
      <div className="flex  gap-4 border-2 border-darkGrey p-2 rounded-4xl mt-4 ">
        {navLinks.map(({ href, icon, label }, i) => (
          <Link href={href} key={i}>
            <NavButton
              icon={icon}
              label={label}
              className={pathname === href ? "!bg-classicGold !text-mutedGrey" : ""}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
