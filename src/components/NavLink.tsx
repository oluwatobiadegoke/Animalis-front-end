import { Link, useLocation, matchRoutes } from "react-router-dom";

import { router } from "../utils/routes";

type LinkProps = {
  to: string;
  exact?: boolean;
  children: React.ReactNode;
  className: string;
  activeClassName?: string;
  inactiveClassName?: string;
};

const NavLink = ({
  to,
  exact,
  className,
  children,
  activeClassName,
  inactiveClassName,
}: LinkProps) => {
  const location = useLocation();

  let isActive;

  const match = matchRoutes(router, location);

  if (exact) {
    isActive = location.pathname === to;
  } else {
    isActive = match?.some((match) => match.pathname === to);
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
