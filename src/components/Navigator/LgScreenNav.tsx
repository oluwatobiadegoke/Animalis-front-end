import { useLocation } from "react-router-dom";
import NavgatorLinks from "./NavgatorLinks";
import { routes } from "../../utils/routes";
import Button from "../Button";
import AuthLgScNav from "./AuthLgScNav";

const LgScreenNav = () => {
  const location = useLocation();

  return (
    <div className="flex-1 hidden md:flex items-center">
      <NavgatorLinks />
      {location.pathname.includes("post") ||
      location.pathname.includes("profile") ? (
        <AuthLgScNav />
      ) : (
        <div className="flex-1 flex items-center justify-end gap-4">
          <Button
            link={routes.login}
            type="secondary"
            width="w-28"
            className="font-semibold"
          >
            Login
          </Button>
          <Button link={routes.register} width="w-28" className="font-semibold">
            Register
          </Button>
        </div>
      )}
    </div>
  );
};

export default LgScreenNav;
