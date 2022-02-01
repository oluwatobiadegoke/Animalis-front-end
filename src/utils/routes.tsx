import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Login from "../pages/login";
import Market from "../pages/Market";
import Posts from "../pages/posts";
import Post from "../pages/posts/post";
import Profile from "../pages/profile";
import Register from "../pages/register";
import { RouterProps } from "../interfaces/router";
import SinglePost from "../pages/posts/singlePost";

export const routes = {
  home: "/",
  about: "/about",
  contact: "/contact",
  login: "/login",
  register: "/register",
  marketplace: "/marketplace",
  posts: "/posts",
  post: "/post",
  profile: "/profile",
};

export const router: RouterProps[] = [
  {
    path: routes.home,
    element: <Home />,
  },
  {
    path: routes.about,
    element: <About />,
  },
  {
    path: routes.contact,
    element: <Contact />,
  },
  {
    path: routes.login,
    element: <Login />,
  },
  {
    path: routes.register,
    element: <Register />,
  },
  {
    path: routes.marketplace,
    element: <Market />,
  },
  {
    path: routes.posts,
    element: <Posts />,
  },
  {
    path: routes.post,
    element: <Post />,
    children: [
      {
        path: ":postId",
        element: <SinglePost />,
      },
    ],
  },
  {
    path: routes.profile,
    element: <Profile />,
  },
];
