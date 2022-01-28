import { Formik, Form, FormikHelpers } from "formik";
import Button from "../../Button";

import {
  MyInputArea,
  signupFormSchema,
  initialSignUpValues,
} from "../AuthUtils";

interface formValues {
  fullname: string;
  email: string;
  password: string;
  cpassword: string;
}

const SignupForm = () => {
  return (
    <Formik
      initialValues={initialSignUpValues}
      validationSchema={signupFormSchema}
      onSubmit={(values: formValues, action: FormikHelpers<formValues>) => {}}
    >
      <Form>
        <div className="bg-[rgb(15,23,42)] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 mx-3 px-3 py-5">
          <MyInputArea label="Full Name" name="fullname" type="text" />
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
            className="font-semibold transition-all duration-500"
          >
            Register
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignupForm;
