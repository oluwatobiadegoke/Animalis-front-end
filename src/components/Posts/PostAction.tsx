import { Link } from "react-router-dom";
import { FaComment } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { PostProps } from "../../interfaces";
import { likePost, unlikePost } from "../../app/redux/slices/post";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks";

interface PostActionProps {
  post: PostProps;
}

const PostAction: React.FC<PostActionProps> = ({ post }) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="absolute bottom-3 left-1/2 right-1/2  flex items-center justify-center gap-12">
      <Link to={`/post/${post._id}`} className="flex items-center gap-3">
        <FaComment className="text-textWhite-500 text-xl" />
        <span className="text-textGrey-500">{post.comments.length}</span>
      </Link>

      <div className="flex items-center gap-3">
        {post.likes.find((like) => like.userId === user?.userId) ? (
          <AiFillHeart
            className="text-red-500 text-xl cursor-pointer"
            onClick={async () => {
              dispatch(
                unlikePost({
                  userId: user?.userId!,
                  postId: post._id,
                })
              );
            }}
          />
        ) : (
          <AiOutlineHeart
            className="text-textWhite-500 text-xl cursor-pointer"
            onClick={async () => {
              dispatch(
                likePost({
                  userId: user?.userId!,
                  postId: post._id,
                })
              );
            }}
          />
        )}
        <span className="text-textGrey-500">{post.likes.length}</span>
      </div>
    </div>
  );
};

export default PostAction;
