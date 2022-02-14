import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { AiOutlineClose } from "react-icons/ai";

import ImageInput from "../../components/Posts/ImageInput";
import PostImages from "../../components/Posts/PostImages";
import { Media } from "../../interfaces";
import Modal from "../../utils/Modal";
import Button from "../../components/Button";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks";
import { uploadPost, clearState } from "../../app/redux/slices/post";

interface InputProps {
  name: string;
}

const MyTextArea = (props: InputProps) => {
  const [field, meta] = useField(props);
  return (
    <textarea
      rows={5}
      className={`p-3 bg-transparent w-full rounded-lg border border-textGrey-500 flex-1 outline-none ring-0 text-sm md:text-base ${
        meta.error && "ring-2 ring-red-500"
      } ${meta.error && "placeholder-red-500"}`}
      {...field}
      {...props}
      placeholder={
        meta.touched && meta.error ? meta.error : "Tell us something..."
      }
    />
  );
};

const Upload = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, uploaded, error } = useAppSelector((state) => state.post);
  const { user } = useAppSelector((state) => state.auth);
  const [images, setImages] = useState<Media[]>([]);
  const [colors] = useState<String[]>([
    "bg-[#a1573a]",
    "bg-[#f2c45f]",
    "bg-teal-500",
    "bg-green-300",
  ]);

  useEffect(() => {
    if (uploaded) {
      dispatch(clearState());
      navigate("/posts");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploaded]);

  return (
    <main className="px-3 xl:px-0">
      <Modal />
      <form className="flex justify-center gap-4 ">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <ImageInput
              key={index}
              name={`avatar${index.toString()}`}
              images={images}
              setImages={setImages}
              bg={colors[index]}
              position={index}
            />
          ))}
      </form>
      {images.length > 0 && <PostImages images={images} />}
      <Formik
        initialValues={{ post: "" }}
        validationSchema={Yup.object().shape({
          post: Yup.string().required("Post is required"),
        })}
        onSubmit={(values) => {
          dispatch(
            uploadPost({
              userId: user?.userId!,
              username: user?.username!,
              words: values.post,
              media: images,
            })
          );
        }}
      >
        <Form className="mt-8">
          {error && (
            <div className="bg-red-500 py-1 px-3 mb-2 rounded flex items-center justify-between gap-4">
              <p className="text-sm md:text-base text-white">{error}</p>
              <button onClick={() => dispatch(clearState())}>
                <AiOutlineClose className="text-white text-xl" />
              </button>
            </div>
          )}
          <MyTextArea name="post" />
          <Button width="w-28" className="mt-4 font-semibold mx-auto">
            {loading ? "Loading..." : "Post"}
          </Button>
        </Form>
      </Formik>
    </main>
  );
};

export default Upload;
