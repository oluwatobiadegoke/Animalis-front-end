import { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineAddAPhoto } from "react-icons/md";

import { Media } from "../../interfaces";

interface Props {
  name: string;
  images: Media[];
  setImages: (images: Media[]) => void;
  bg: String;
  position: number;
}

const ImageInput = ({ name, images, setImages, bg, position }: Props) => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setMsg("");
    }, 3000);
  }, [msg]);

  const handleImageUpload = async (files: any) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "vtwjykk9");
    try {
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/theoluwatobi/image/upload",
        formData
      );
      const image: Media = {
        link: data.secure_url,
        type: "image",
      };
      setImages([...images, image]);
      setLoading(false);
      setMsg("Done");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <label
      htmlFor={name}
      className=" text-sm rounded-lg cursor-pointer shadow mx-auto"
    >
      <div className={`editImg group relative h-16 w-16 rounded-lg ${bg}`}>
        {images.length > 0 ? (
          <img
            className="absolute inset-0 object-cover h-16 w-16 rounded-lg"
            src={images[position]?.link ? images[position]?.link : ""}
            alt={images[position]?.link ? images[position]?.link : ""}
          />
        ) : (
          <div className="inline absolute inset-0 object-cover h-16 w-16 rounded-lg"></div>
        )}
        <div className="absolute inset-0 h-16 w-16 rounded-lg bg-black bg-opacity-60 group-hover:bg-opacity-80 transition-all"></div>
        <MdOutlineAddAPhoto
          className="absolute top-1/2 left-1/2 text-2xl text-textGrey-500 group-hover:text-textWhite-500 transition-all"
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </div>
      <input
        className="hidden"
        type="file"
        id={name}
        name={name}
        accept="image/png, image/jpeg"
        onChange={(e) => handleImageUpload(e.target.files)}
      />
      {(loading || msg) && <small>{loading ? "loading" : `${msg}`}</small>}
    </label>
  );
};

export default ImageInput;
