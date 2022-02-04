import { MdOutlineAddAPhoto } from "react-icons/md";

import { Media } from "../../interfaces";

interface Props {
  name: string;
  image: string;
  images: Media[];
  bg: String;
}

const ImageInput = ({ name, image, images, bg }: Props) => {
  return (
    <label
      htmlFor="avatar"
      className=" text-sm rounded-lg cursor-pointer shadow"
    >
      <div className={`editImg relative h-16 w-16 rounded-lg ${bg}`}>
        {images.length > 0 ? (
          <img
            className="absolute inset-0 object-cover h-16 w-16 rounded-lg"
            src={image}
            alt={images[0].link}
          />
        ) : (
          <div className="absolute inset-0 object-cover h-16 w-16 rounded-lg"></div>
        )}
        <div className="absolute inset-0 h-16 w-16 rounded-lg bg-black bg-opacity-80"></div>
        <MdOutlineAddAPhoto
          className="absolute top-1/2 left-1/2 text-2xl"
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </div>
      <input
        className="hidden"
        type="file"
        id={name}
        name={name}
        accept="image/png, image/jpeg"
      />
    </label>
  );
};

export default ImageInput;
