import { PostProps } from "../../interfaces";
import { routes } from "../../utils/routes";
import { Link, useLocation } from "react-router-dom";

interface PostAvatarProps {
  post: PostProps;
}

const PostAvatar: React.FC<PostAvatarProps> = ({ post }) => {
  const location = useLocation();
  return (
    <Link to={`${routes.profile}/${post.userId}`}>
      {post.userAvatar ? (
        <img
          className="absolute top-3 left-3 inline object-cover w-16 h-16 mr-2 rounded-full"
          src={
            !!Number(location.pathname.slice(-1))
              ? `${post.userAvatar}`
              : post.userAvatar
          }
          alt={post.username}
        />
      ) : (
        <div className="absolute top-3 left-3 w-16 h-16 rounded-full flex items-center justify-center bg-teal-500 ">
          <span className="text-2xl text-textWhite-500">
            {post.username[0]}
          </span>
        </div>
      )}
    </Link>
  );
};

export default PostAvatar;
