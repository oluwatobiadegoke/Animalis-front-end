import Home from "../pages/home";
import Login from "../pages/login";
import Posts from "../pages/posts";
import Post from "../pages/posts/post";
import Profile from "../pages/profile";
import Register from "../pages/register";
import { RouterProps } from "../interfaces/router";

export const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  posts: "/posts",
  post: "/posts/:id",
  profile: "/profile",
};

export const router: RouterProps[] = [
  {
    path: routes.home,
    element: <Home />,
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
    path: routes.posts,
    element: <Posts />,
  },
  {
    path: routes.post,
    element: <Post />,
  },
  {
    path: routes.profile,
    element: <Profile />,
  },
];
