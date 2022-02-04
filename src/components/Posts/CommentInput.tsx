import { useField, Formik, Form } from "formik";
import * as Yup from "yup";
import { BiMessageCheck } from "react-icons/bi";

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

const CommentInput = () => {
  return (
    <Formik
      initialValues={{ comment: "" }}
      validationSchema={Yup.object().shape({
        comment: Yup.string(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      <Form className="h-14 flex items-center fixed bottom-0 left-0 right-0 z-20 py-3 bg-[rgb(23,49,77)]">
        <div className="h-10 text-sm xl:text-base w-full flex items-center px-3 border-b border-b-textGrey-500">
          <MyInputArea name="comment" />
          <button type="submit">
            <BiMessageCheck className="text-textGrey-500 text-2xl ml-2" />
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default CommentInput;
