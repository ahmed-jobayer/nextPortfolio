const Navbar = () => {
  return (
    <div className="flex justify-center">
      <nav
        className="
          fixed 
      rounded-full
          z-50 
          text-gold 
          border-t border-gold
          md:border-t-0 md:border-b-2 border-accent 
          p-4 
          flex justify-between items-center
          bottom-2 md:top-2
          bg-transparent
          md:bottom-auto
        "
      >
        <div className="flex gap-4">
          <a href="#" className="hover:text-yellow-400">
            Home
          </a>
          <a href="#" className="hover:text-yellow-400">
            About
          </a>
          <a href="#" className="hover:text-yellow-400">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
