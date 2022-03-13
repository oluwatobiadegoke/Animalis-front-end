import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useField, Formik, Form } from "formik";
import * as Yup from "yup";
import { MdCameraEnhance } from "react-icons/md";

import Button from "../../components/Button";
import { useUser } from "../../utils/swrHooks";
import { useAppSelector, useAppDispatch } from "../../app/redux/hooks";
import { updateUser, clearState } from "../../app/redux/slices/user";

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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user: authUser } = useAppSelector((state) => state.auth);
  const {
    loading: updating,
    uploaded,
    error,
  } = useAppSelector((state) => state.user);
  const { user } = useUser(authUser!.userId);

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState(false);
  const [avatar, setAvatar] = useState(user?.avatar);

  useEffect(() => {
    setTimeout(() => {
      setMsg("");
    }, 3000);
  }, [msg, err]);

  useEffect(() => {
    setTimeout(() => {
      clearState();
    }, 3000);
  }, [error]);

  useEffect(() => {
    clearState();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploaded]);

  const handleImageUpload = async (files: any) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "vtwjykk9");
    const token = Cookies.get("token");
    delete axios.defaults.headers.common["Authorization"];
    try {
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/theoluwatobi/image/upload",
        formData
      );
      setAvatar(data.secure_url);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setLoading(false);
    } catch (error) {
      setErr(true);
      setMsg("Error uploading image");
    }
  };

  return (
    <div>
      {user && (
        <>
          {(loading || msg) && (
            <small className={`${err && "text-red-500"} mg-2`}>
              {loading ? "loading" : `${msg}`}
            </small>
          )}
          <form className="mb-8 flex items-center">
            <label
              htmlFor="avatar"
              className=" text-sm rounded-full cursor-pointer mx-auto"
            >
              <div className="editImg relative h-28 w-28 mx-auto rounded-full">
                {avatar.length > 1 || user.avatar.length > 1 ? (
                  <img
                    className="absolute inset-0 object-cover h-28 w-28 rounded-full"
                    src={avatar.length > 1 ? avatar : user.avatar}
                    alt={user.username}
                  />
                ) : (
                  <div className="h-28 w-28 rounded-full flex items-center justify-center bg-teal-500 ">
                    <span className="text-2xl text-textWhite-500">
                      {user.username[0]}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 h-28 w-28 rounded-full bg-black bg-opacity-60"></div>
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
                onChange={(e) => handleImageUpload(e.target.files)}
              />
            </label>
          </form>
          <Formik
            initialValues={{
              username: user.username,
              bio: user.bio,
              email: user.email,
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string().required("Required"),
              bio: Yup.string(),
              email: Yup.string().required("Required"),
            })}
            onSubmit={(values) => {
              dispatch(updateUser({ ...values, userId: user._id, avatar }));
              if (uploaded) {
                navigate(-1);
              }
            }}
          >
            <Form>
              <MyInputArea name="username" />
              <MyInputArea name="bio" />
              <MyInputArea name="email" />
              {error && <small className="mt-4 text-red-500">{error}</small>}
              <Button width="w-28" className="font-semibold mx-auto mt-6">
                {updating ? "Updating..." : "Update"}
              </Button>
            </Form>
          </Formik>
        </>
      )}
    </div>
  );
};

export default EditProfile;
