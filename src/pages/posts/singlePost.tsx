import { useParams } from "react-router-dom";

import Post from "../../components/Posts/Post";
import { IProps } from "../../components/Posts/Post";
import Modal from "../../utils/Modal";
import Comment from "../../components/Posts/Comment";
import CommentInput from "../../components/Posts/CommentInput";
import { usePost } from "../../utils/swrHooks";

const SinglePost = () => {
  const { postId } = useParams();
  const { post, isLoading, isError } = usePost(postId!);

  const PostProps: IProps = {
    post,
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <>
      <Modal />
      <Post postPage={PostProps} />
      <div className="pb-16">
        {post.comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </div>
      <CommentInput />
    </>
  );
};

export default SinglePost;
