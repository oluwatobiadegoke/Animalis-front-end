import { useState } from "react";
import { useParams } from "react-router-dom";

// import Layout from "../../components/Layout";
import Post from "../../components/Posts/Post";
import { PostProps } from "../../interfaces";
import { DemoPosts } from "../../utils/DemoPosts";
import { Media } from "../../interfaces";
import { IProps } from "../../components/Posts/Post";
import Modal from "../../utils/Modal";
import Comment from "../../components/Posts/Comment";
import CommentInput from "../../components/Posts/CommentInput";

const SinglePost = () => {
  const { postId } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [modalImgs, setModalImgs] = useState<Media[]>([]);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [post] = useState<PostProps>(
    DemoPosts.find((post) => post.postId === postId)!
  );

  const PostProps: IProps = {
    post,
    setDisplayIndex,
    setModalImgs,
    setIsOpen,
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        imgs={modalImgs}
        displayIndex={displayIndex}
      />
      <Post postPage={PostProps} />
      <div>
        {post.comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </div>
      <CommentInput />
    </>
  );
};

export default SinglePost;
