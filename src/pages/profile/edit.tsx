import { useState } from "react";
import { useField, Formik, Form } from "formik";
import * as Yup from "yup";
import { MdCameraEnhance } from "react-icons/md";

import { demoUser } from "../../utils/DemoUser";
import Button from "../../components/Button";

interface InputProps {
  name: string;
}

const MyInputArea = (props: InputProps) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-4 border-b border-textGrey-500 mb-4 text-sm md:text-base">
      <label className="capitalize font-semibold">{props.name}</label>
      <input
        className={`bg-transparent flex-1 outline-none ring-0 ${
          meta.error && "ring-2 ring-red-500"
        } ${meta.error && "placeholder-red-500"}`}
        {...field}
        {...props}
        placeholder={meta.touched && meta.error ? meta.error : "Type a comment"}
      />
    </div>
  );
};

const EditProfile = () => {
  const userId = "1";

  const [user] = useState(demoUser.find((user) => user.userId === userId)!);

  return (
    <div>
      <form className="mb-8 flex items-center">
        <label
          htmlFor="avatar"
          className=" text-sm rounded-full cursor-pointer mx-auto"
        >
          <div className="editImg relative h-28 w-28 mx-auto rounded-full">
            <img
              className="absolute inset-0 object-cover h-28 w-28 rounded-full"
              src={user.avatar}
              alt={user.username}
            />
            <div
              className="absolute inset-0 h-28 w-28 rounded-full bg-black bg-opacity-60"
              z-10
            ></div>
            <MdCameraEnhance
              className="absolute top-1/2 left-1/2 text-2xl"
              style={{ transform: "translate(-50%, -50%)" }}
            />
          </div>
          <input
            className="hidden"
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
        </label>
      </form>
      <Formik
        initialValues={{
          name: user.username,
          bio: user.bio,
          email: user.email,
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required"),
          bio: Yup.string(),
          email: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <MyInputArea name="name" />
          <MyInputArea name="bio" />
          <MyInputArea name="email" />
          <Button width="w-28" className="font-semibold mx-auto mt-6">
            Save
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default EditProfile;
