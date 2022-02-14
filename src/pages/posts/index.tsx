import Layout from "../../components/Layout";
import Modal from "../../utils/Modal";
import AllPosts from "../../components/Posts/Posts";
import { usePosts } from "../../utils/swrHooks";

const Posts = () => {
  const { posts } = usePosts();

  return (
    <Layout>
      <main className="text-gray-200 pt-[120px] xl:pt-[136px] lg:pt-24 max-w-2xl mx-auto w-full xl:px-0">
        <Modal />
        {posts && <AllPosts DemoPosts={posts} />}
      </main>
    </Layout>
  );
};

export default Posts;
