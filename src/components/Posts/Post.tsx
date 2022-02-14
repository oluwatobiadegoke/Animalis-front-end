import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaComment } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { PostProps } from "../../interfaces";
import { routes } from "../../utils/routes";
import PostImages from "./PostImages";

export type IProps = {
  post: PostProps;
};

type PostPageProps = {
  postPage: IProps;
};

const Post: React.FC<PostPageProps> = ({ postPage: { post } }) => {
  const [userId] = useState("1");
  const location = useLocation();

  return (
    <div className="relative block text-sm md:text-base pt-3 px-3 rounded-lg hover:bg-[rgb(23,49,77)] transition-all duration-500">
      {/* CLICKING THE IMAGE LEADS TO A PROFILE PAGE. IT IS MADE ABSOLUTE JUST SO THAT THE LINK APPLIES ONLY TO WHEN THE IMAGE ALONE IS CLICKED */}
      <Link to={`${routes.profile}/${userId}`}>
        {post.userAvatar ? (
          <img
            className="absolute top-3 left-3 inline object-cover w-16 h-16 mr-2 rounded-full"
            src={
              !!Number(location.pathname.slice(-1))
                ? `.${post.userAvatar}`
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
      {/* CLICKING ANY OF THE IMAGES DISPLAYS A POP UP. THIS IS ALSO SEPARATED FROM THE GROUP SO THAT CLICKING IT WOULD NOT INITIATE THE LINK */}
      <PostImages images={post.media} />
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
            post.media.length >= 1 ? "mb-[280px] md:mb-[310px]" : "mb-2"
          }`}
        >
          {post.words}
        </p>
        <div className="flex items-center justify-center gap-12 mt-4">
          <div className="flex items-center gap-3">
            <FaComment className="text-textWhite-500" />
            <span className="text-textGrey-500">{post.comments.length}</span>
          </div>

          <div className="flex items-center gap-3">
            {post.likes.includes(userId) ? (
              <AiFillHeart className="text-red-500" />
            ) : (
              <AiOutlineHeart className="text-textWhite-500" />
            )}
            <span className="text-textGrey-500">{post.likes.length}</span>
          </div>
        </div>
        <div className="w-full h-[1px] mt-3 bg-textGrey-500"></div>
      </Link>
    </div>
  );
};

export default Post;
