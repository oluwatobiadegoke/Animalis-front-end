import { useState } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

import ImageInput from "../../components/Posts/ImageInput";
import PostImages from "../../components/Posts/PostImages";
import { Media } from "../../interfaces";
import Modal from "../../utils/Modal";
import Button from "../../components/Button";

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
  const [images] = useState<Media[]>([]);
  const [colors] = useState<String[]>([
    "bg-[#a1573a]",
    "bg-[#f2c45f]",
    "bg-teal-500",
    "bg-green-300",
  ]);

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
              bg={colors[index]}
              image={images[index]?.link}
            />
          ))}
      </form>
      {images.length > 0 && <PostImages images={images} />}
      <Formik
        initialValues={{ post: "" }}
        validationSchema={Yup.object().shape({
          post: Yup.string(),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="mt-8">
          <MyTextArea name="post" />
          <Button width="w-28" className="mt-4 font-semibold mx-auto">
            Post
          </Button>
        </Form>
      </Formik>
    </main>
  );
};

export default Upload;
