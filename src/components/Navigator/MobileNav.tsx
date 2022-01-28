import NavgatorLinks from "./NavgatorLinks";
import Button from "../Button";
import { routes } from "../../utils/routes";

interface Props {
  isOpen: boolean;
}

const MobileNav = ({ isOpen }: Props) => {
  return (
    <div
      className={`${
        isOpen ? " right-0" : " -right-full "
      } md:hidden absolute top-24 py-5 px-10 bg-gradient-to-tr from-[rgb(15,23,42)] via-[rgb(23,49,77)] to-teal-800 transition-all duration-1000`}
    >
      <NavgatorLinks />
      <Button
        link={routes.login}
        type="secondary"
        width="w-28"
        className="font-semibold my-7"
      >
        Login
      </Button>
      <Button link={routes.register} width="w-28" className="font-semibold">
        Register
      </Button>
    </div>
  );
};

export default MobileNav;
