import { useLocation } from "react-router-dom";

import { Media } from "../../interfaces";
import { useAppDispatch } from "../../app/redux/hooks";
import { openModal } from "../../app/redux/slices/modal";

interface Props {
  images: Media[];
}

const PostImages: React.FC<Props> = ({ images }) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  return (
    <div
      className={`${
        !location.pathname.includes("upload") &&
        "absolute right-3 left-3 bottom-[41px] "
      } max-w-full h-64 md:h-72 mb-2 bg-transparent rounded-xl overflow-hidden grid gap-1 ${
        images.length < 2 ? "grid-cols-1 " : " grid-cols-2"
      }`}
    >
      {images.map((media, index) => {
        return (
          <div
            key={index}
            className={`h-full w-full overflow-hidden cursor-pointer ${
              images.length === 3 && index === 0 && "row-span-2"
            }`}
            onClick={() => {
              dispatch(openModal({ modalImgs: images, displayIndex: index }));
            }}
          >
            <img
              className="w-full min-h-full object-cover"
              src={media.link}
              alt={media.type}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PostImages;
