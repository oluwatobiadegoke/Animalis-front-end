import { Outlet } from "react-router-dom";

import Layout from "../../components/Layout";

const Profile = () => {
  return (
    <Layout>
      <main className="text-gray-200 px-16">Profile page</main>
      <Outlet />
    </Layout>
  );
};

export default Profile;
