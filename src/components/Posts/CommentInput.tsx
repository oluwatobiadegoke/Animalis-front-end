import { useField, Formik, Form } from "formik";
import * as Yup from "yup";
import { BiMessageCheck } from "react-icons/bi";
import { useSWRConfig } from "swr";

import { useAppDispatch, useAppSelector } from "../../app/redux/hooks";
import { addComment } from "../../app/redux/slices/post";
import Spinner from "../../utils/Spinner";

interface InputProps {
  name: string;
}

const MyInputArea = (props: InputProps) => {
  const [field, meta] = useField(props);
  return (
    <input
      className={`bg-transparent flex-1 outline-none ring-0 ${
        meta.error && "ring-2 ring-red-500"
      } ${meta.error && "placeholder-red-500"}`}
      {...field}
      {...props}
      placeholder={meta.touched && meta.error ? meta.error : "Type a comment"}
    />
  );
};

interface CommentInputProps {
  postId: string;
}

const CommentInput: React.FC<CommentInputProps> = ({ postId }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const { loading, error } = useAppSelector((state) => state.post);
  const { mutate } = useSWRConfig();
  const baseUrl = "http://localhost:8000/api/v1";
  return (
    <Formik
      initialValues={{ comment: "" }}
      validationSchema={Yup.object().shape({
        comment: Yup.string(),
      })}
      onSubmit={(values) => {
        dispatch(
          addComment({
            postId,
            text: values.comment,
            userId: user!.userId,
            username: user!.username,
          })
        );
        mutate(`${baseUrl}/posts/${postId}`, true);
      }}
    >
      <Form className="h-14 flex items-center fixed bottom-0 left-0 right-0 z-20 py-3 bg-[rgb(23,49,77)]">
        <div className="h-10 text-sm xl:text-base w-full flex items-center px-3 border-b border-b-textGrey-500">
          <MyInputArea name="comment" />
          <button type="submit">
            {!loading || error ? (
              <BiMessageCheck className="text-textGrey-500 text-2xl ml-2" />
            ) : (
              <Spinner />
            )}
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default CommentInput;
