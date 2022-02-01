import { Outlet } from "react-router-dom";

import Layout from "../../components/Layout";

const Post = () => {
  return (
    <Layout>
      <main className="relative text-gray-200 pt-[120px] xl:pt-[136px] lg:pt-24 max-w-2xl mx-auto w-full xl:px-0">
        <Outlet />
      </main>
    </Layout>
  );
};

export default Post;
