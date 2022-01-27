import { Link } from "react-router-dom";
import { navLinks } from "../utils/navLinks";
import { routes } from "../utils/routes";
import Button from "./Button";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="py-6 flex items-center">
      <Link
        to={routes.home}
        className="text-textWhite-500 text-2xl uppercase mr-24 font-semibold"
      >
        Animal.is
      </Link>
      <div className="flex-1 flex items-center gap-8">
        {navLinks.map((link) => {
          const { id, name, path } = link;
          return (
            <NavLink
              key={id}
              to={path}
              className="text-textWhite-500 font-semibold transition duration-500"
              activeClassName="text-textGrey-500"
              inactiveClassName="hover:text-textGrey-500"
            >
              {name}
            </NavLink>
          );
        })}
      </div>
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
