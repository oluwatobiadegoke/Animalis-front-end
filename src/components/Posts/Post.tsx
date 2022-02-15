import { Link } from "react-router-dom";

import { PostProps } from "../../interfaces";
import PostImages from "./PostImages";
import PostAction from "./PostAction";
import PostAvatar from "./PostAvatar";
import PostOptions from "./PostOptions";

export type IProps = {
  post: PostProps;
};

type PostPageProps = {
  postPage: IProps;
};

const Post: React.FC<PostPageProps> = ({ postPage: { post } }) => {
  return (
    <div className="relative block text-sm md:text-base pt-3 px-3 rounded-lg hover:bg-[rgb(23,49,77)] transition-all duration-500">
      <PostAvatar post={post} />
      <PostImages images={post.media} />
      <PostAction post={post} />
      <PostOptions post={post} />
      {/* ////////////////////////////// */}
      <Link to={`/post/${post._id}`}>
        <div className="flex gap-2 mb-2 h-16">
          <div className="ml-[72px]">
            <p>{post.username}</p>
            <p className="text-sm text-textGrey-500">2 mins ago</p>
          </div>
        </div>

        <p
          className={`${
            post.media.length >= 1 ? "mb-[310px] md:mb-[340px]" : "mb-2"
          }`}
        >
          {post.words}
        </p>

        <div className="w-full h-[1px] mt-3 bg-textGrey-500"></div>
      </Link>
    </div>
  );
};

export default Post;
