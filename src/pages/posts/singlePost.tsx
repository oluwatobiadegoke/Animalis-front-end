import { useState } from "react";
import { useParams } from "react-router-dom";

import Post from "../../components/Posts/Post";
import { PostProps } from "../../interfaces";
import { DemoPosts } from "../../utils/DemoPosts";
import { IProps } from "../../components/Posts/Post";
import Modal from "../../utils/Modal";
import Comment from "../../components/Posts/Comment";
import CommentInput from "../../components/Posts/CommentInput";

const SinglePost = () => {
  const { postId } = useParams();
  const [post] = useState<PostProps>(
    DemoPosts.find((post) => post.postId === postId)!
  );

  const PostProps: IProps = {
    post,
  };

  return (
    <>
      <Modal />
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
