import { useField } from "formik";
import * as Yup from "yup";

import { IInputProps, formValues } from "../../interfaces";
interface SignUpFormValues extends formValues {
  fullname: string;
  cpassword: string;
}

export const initialValues: formValues = {
  email: "",
  password: "",
};

export const initialSignUpValues: SignUpFormValues = {
  fullname: "",
  email: "",
  password: "",
  cpassword: "",
};

export const formSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, "Too Short!")
    .max(15, "Too Long!")
    .required("Password cannot be empty"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email cannot be empty."),
});
export const signupFormSchema = Yup.object().shape({
  fullname: Yup.string().required("Fullname cannot be empty."),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email cannot be empty."),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(15, "Too Long!")
    .required("Password cannot be empty"),
  cpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export const MyInputArea = (props: IInputProps) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col mb-5">
      <label
        className="mb-2 text-sm md:text-base text-textWhite-500"
        htmlFor={props.name}
      >
        {props.label}*
      </label>
      <input
        className={`px-5 bg-transparent h-12 ring-1 ring-textGrey-500 ${
          meta.error && "ring-2 ring-red-500"
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <p className="text-xs md:sm lg:base text-red-500 mt-1">{meta.error}</p>
      ) : null}
    </div>
  );
};
