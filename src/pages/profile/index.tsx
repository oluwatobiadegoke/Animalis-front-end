import { Outlet } from "react-router-dom";

// import Layout from "../../components/Layout";
import BottomNav from "../../components/Navigator/BottomNav";
import AuthNavbar from "../../components/Navigator/AuthNavbar";

const Profile = () => {
  return (
    <main className="relative font-pri bg-gradient-to-tr from-[rgb(15,23,42)] via-[rgb(23,49,77)] to-teal-800 min-h-screen overflow-y-auto w-full">
      <AuthNavbar title={"Posts"} />
      <main className="text-textWhite-500 px-3 pt-[120px] xl:pt-[136px] lg:pt-24 max-w-2xl mx-auto w-full xl:px-0">
        <Outlet />
      </main>
      <BottomNav />
    </main>
  );
};

export default Profile;
