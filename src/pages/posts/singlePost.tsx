import { useParams } from "react-router-dom";

import Post from "../../components/Posts/Post";
import { IProps } from "../../components/Posts/Post";
import Modal from "../../utils/Modal";
import Comment from "../../components/Posts/Comment";
import CommentInput from "../../components/Posts/CommentInput";
import { usePost } from "../../utils/swrHooks";

const SinglePost = () => {
  const { postId } = useParams();
  const { post } = usePost(postId!);

  const PostProps: IProps = {
    post,
  };

  return (
    <>
      <Modal />
      {post && (
        <>
          <Post postPage={PostProps} />
          <div className="pb-16">
            {post.comments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
        </>
      )}
      <CommentInput postId={postId!} />
    </>
  );
};

export default SinglePost;
