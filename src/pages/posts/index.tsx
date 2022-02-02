import Layout from "../../components/Layout";
import Modal from "../../utils/Modal";
import { DemoPosts } from "../../utils/DemoPosts";
import AllPosts from "../../components/Posts/Posts";

const Posts = () => {
  return (
    <Layout>
      <main className="text-gray-200 pt-[120px] xl:pt-[136px] lg:pt-24 max-w-2xl mx-auto w-full xl:px-0">
        <Modal />
        <AllPosts DemoPosts={DemoPosts} />
      </main>
    </Layout>
  );
};

export default Posts;
