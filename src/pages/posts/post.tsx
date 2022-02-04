import { Outlet, useLocation } from "react-router-dom";

import AuthNavbar from "../../components/Navigator/AuthNavbar";

const Post = () => {
  const location = useLocation();

  return (
    <main className="font-pri bg-gradient-to-tr from-[rgb(15,23,42)] via-[rgb(23,49,77)] to-teal-800 min-h-screen overflow-y-auto w-full">
      <main className="relative text-gray-200 pt-[120px] xl:pt-[136px] lg:pt-24 max-w-2xl mx-auto w-full xl:px-0  min-h-screen">
        <AuthNavbar
          title={location.pathname.includes("upload") ? "Upload" : "Post"}
        />
        <Outlet />
      </main>
    </main>
  );
};

export default Post;
