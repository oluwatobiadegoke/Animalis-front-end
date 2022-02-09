import {
  Link,
  useLocation,
  matchRoutes,
  useResolvedPath,
} from "react-router-dom";

import { router } from "../utils/routes";
import { LinkProps } from "../interfaces";
import { useAppSelector } from "../app/redux/hooks";

const NavLink = ({
  to,
  exact,
  className,
  children,
  activeClassName,
  inactiveClassName,
}: LinkProps) => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();
  const resolvedPath = useResolvedPath(to);

  let isActive;

  const match = matchRoutes(router(isLoggedIn), location);

  if (exact) {
    isActive = location.pathname === resolvedPath.pathname;
  } else {
    isActive = match?.some((match) => match.pathname === resolvedPath.pathname);
  }

  let classNames = `${className} ${
    isActive ? activeClassName : inactiveClassName
  }`;

  return (
    <Link to={to} className={classNames}>
      {children}
    </Link>
  );
};

export default NavLink;
