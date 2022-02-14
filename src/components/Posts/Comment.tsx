import { useParams } from "react-router-dom";
import { useSWRConfig } from "swr";
import { BsTrash } from "react-icons/bs";

import { Comments } from "../../interfaces";
import { useAppSelector, useAppDispatch } from "../../app/redux/hooks";
import { removeComment } from "../../app/redux/slices/post";
import Spinner from "../../utils/Spinner";

interface Props {
  comment: Comments;
}

const Comment: React.FC<Props> = ({ comment: { _id, username, text } }) => {
  const { postId } = useParams();
  const user = useAppSelector((state) => state.auth.user);
  const { removeLoading, error } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();
  const { mutate } = useSWRConfig();
  const baseUrl = "http://localhost:8000/api/v1";
  return (
    <div className="text-sm md:text-base shadow border-t border-t-textGrey-800 flex items-center gap-2 my-2 py-1  px-3 mx-3">
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-teal-500 mr-2">
        <span className="text-2xl text-textWhite-500">{username[0]}</span>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span>{username}</span>
          <span className="text-xs md:text-sm text-textGrey-500">2mins</span>
        </div>
        <p className="text-textGrey-300">{text}</p>
      </div>
      {username === user!.username && (
        <>
          {!removeLoading || error ? (
            <BsTrash
              className="text-xl text-red-400 cursor-pointer"
              onClick={() => {
                dispatch(removeComment({ postId: postId!, commentId: _id }));
                mutate(`${baseUrl}/posts/${postId}`, true);
              }}
            />
          ) : (
            <Spinner />
          )}
        </>
      )}
    </div>
  );
};

export default Comment;
