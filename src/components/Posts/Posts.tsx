import { IProps } from "../../components/Posts/Post";
import Post from "../../components/Posts/Post";
import { PostProps } from "../../interfaces";

interface Props {
  DemoPosts: PostProps[];
}

const Posts = ({ DemoPosts }: Props) => {
  return (
    <div className="my-0 mb:4 xl:my-8">
      {DemoPosts.map((post) => {
        const PostProps: IProps = {
          post,
        };
        return <Post key={post.postId} postPage={PostProps} />;
      })}
    </div>
  );
};

export default Posts;
