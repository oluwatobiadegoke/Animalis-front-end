import { useState } from "react";
import { Link } from "react-router-dom";
import { HiX, HiMenuAlt4 } from "react-icons/hi";

import { routes } from "../../utils/routes";
import LgScreenNav from "./LgScreenNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[rgb(15,23,42)] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10">
      <div className="relative h-24 flex items-center justify-between md:justify-start  max-w-7xl mx-auto w-full px-3 xl:px-0">
        <Link
          to={routes.home}
          className="text-textWhite-500 text-xl md:text-2xl md:mr-24 font-semibold"
        >
          Animal.Kgdm
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden items-center justify-center text-textWhite-500"
        >
          {!isOpen ? (
            <HiMenuAlt4 className="text-2xl" />
          ) : (
            <HiX className="text-2xl" />
          )}
        </button>

        <LgScreenNav />
        <MobileNav isOpen={isOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
