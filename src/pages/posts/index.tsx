import { useState } from "react";

import Layout from "../../components/Layout";
import Modal from "../../utils/Modal";
import { DemoPosts } from "../../utils/DemoPosts";
import Post from "../../components/Posts/Post";

import { Media } from "../../interfaces";
import { IProps } from "../../components/Posts/Post";

const Posts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalImgs, setModalImgs] = useState<Media[]>([]);
  const [displayIndex, setDisplayIndex] = useState(0);

  return (
    <Layout>
      <main className="text-gray-200 pt-[120px] xl:pt-[136px] lg:pt-24 max-w-2xl mx-auto w-full xl:px-0">
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          imgs={modalImgs}
          displayIndex={displayIndex}
        />
        <div className="my-0 mb:4 xl:my-8">
          {DemoPosts.map((post) => {
            const PostProps: IProps = {
              post,
              setDisplayIndex,
              setModalImgs,
              setIsOpen,
            };
            return <Post key={post.postId} postPage={PostProps} />;
          })}
        </div>
      </main>
    </Layout>
  );
};

export default Posts;
