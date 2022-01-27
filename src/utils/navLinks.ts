import { routes } from "./routes";

type LinkProps = {
  id: number;
  name: string;
  path: string;
};

export const navLinks: LinkProps[] = [
  {
    id: 1,
    name: "Home",
    path: routes.home,
  },
  {
    id: 2,
    name: "About",
    path: routes.about,
  },
  {
    id: 3,
    name: "Contact",
    path: routes.contact,
  },
];
