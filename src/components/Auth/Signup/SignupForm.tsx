import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import Button from "../../Button";
import { useAppDispatch, useAppSelector } from "../../../app/redux/hooks";
import { registerUser } from "../../../app/redux/slices/auth";

import {
  MyInputArea,
  signupFormSchema,
  initialSignUpValues,
} from "../AuthUtils";

interface formValues {
  username: string;
  email: string;
  password: string;
  cpassword: string;
}

const SignupForm = () => {
  const dispatch = useAppDispatch();
  const { loading, isRegistered } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isRegistered) {
      return;
    }

    navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRegistered]);

  // useEffect(() => {
  //   dispatch(clearState());
  // }, []);

  return (
    <Formik
      initialValues={initialSignUpValues}
      validationSchema={signupFormSchema}
      onSubmit={(values: formValues) => {
        dispatch(registerUser(values));
      }}
    >
      <Form>
        <div className="bg-[rgb(15,23,42)] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 mx-3 px-3 py-5">
          <MyInputArea label="Full Name" name="username" type="text" />
          <MyInputArea label="Email Address" name="email" type="text" />
          <MyInputArea label="Password" name="password" type="password" />
          <MyInputArea
            label="Confirm Password"
            name="cpassword"
            type="password"
          />
        </div>
        <div className="flex justify-center mt-5">
          <Button
            width="w-28"
            className={`font-semibold transition-all duration-500 ${
              loading && "bg-opacity-50"
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Register"}
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignupForm;
