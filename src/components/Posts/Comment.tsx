import { Comments } from "../../interfaces";

interface Props {
  comment: Comments;
}

const Comment: React.FC<Props> = ({
  comment: { username, userAvatar, text },
}) => {
  return (
    <div className="text-sm md:text-base shadow border-t border-t-textGrey-800 flex gap-2 my-2 py-1  px-3 mx-3">
      <img
        className="inline object-cover w-16 h-16 mr-2 rounded-full"
        src={userAvatar}
        alt={username}
      />
      <div>
        <div className="flex items-center gap-2">
          <span>{username}</span>
          <span className="text-xs md:text-sm text-textGrey-500">2mins</span>
        </div>
        <p className="text-textGrey-300">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
