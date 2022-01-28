// import { Button } from "antd";
import { Formik, Form } from "formik";

import Button from "../../Button";

import { MyInputArea, formSchema, initialValues } from "../AuthUtils";

interface formValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      onSubmit={(values: formValues) => {}}
    >
      <Form>
        <div className="bg-[rgb(15,23,42)] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 mx-3 px-3 py-5">
          <MyInputArea label="Email Address" name="email" type="text" />
          <MyInputArea label="Password" name="password" type="password" />
        </div>
        <div className="flex justify-center mt-5">
          <Button width="w-28" className="font-semibold">
            Login
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
