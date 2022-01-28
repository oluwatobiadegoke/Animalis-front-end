import { routes } from "../../utils/routes";

import CustomLink from "../NavLink";

const NavgatorLinks = () => {
  return (
    <div className="flex-1 flex flex-col md:flex-row items-center gap-8">
      <CustomLink
        to={routes.home}
        className="text-textWhite-500 font-semibold transition duration-500"
        activeClassName="text-textGrey-500"
        inactiveClassName="hover:text-textGrey-500"
      >
        Home
      </CustomLink>
      <CustomLink
        to={routes.about}
        className="text-textWhite-500 font-semibold transition duration-500"
        activeClassName="text-textGrey-500"
        inactiveClassName="hover:text-textGrey-500"
      >
        About
      </CustomLink>
      <CustomLink
        to={routes.contact}
        className="text-textWhite-500 font-semibold transition duration-500"
        activeClassName="text-textGrey-500"
        inactiveClassName="hover:text-textGrey-500"
      >
        Contact
      </CustomLink>
    </div>
  );
};

export default NavgatorLinks;
