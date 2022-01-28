import { Link } from "react-router-dom";
import { navLinks } from "../../utils/navLinks";
import NavLink from "../NavLink";
import { routes } from "../../utils/routes";
import Button from "../Button";
import NavgatorLinks from "./NavgatorLinks";

const Navbar = () => {
  return (
    <nav className="py-6 px-16 flex items-center">
      <Link
        to={routes.home}
        className="text-textWhite-500 text-2xl uppercase mr-24 font-semibold"
      >
        Animal.is
      </Link>
      <NavgatorLinks />
      <div className="flex-1 flex items-center justify-end gap-4">
        <Button
          link={routes.login}
          type="secondary"
          width="w-24"
          className="font-semibold"
        >
          Login
        </Button>
        <Button link={routes.register} width="w-24" className="font-semibold">
          Register
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
