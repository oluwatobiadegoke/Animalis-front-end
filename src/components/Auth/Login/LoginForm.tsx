import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";

import Button from "../../Button";
import { MyInputArea, formSchema, initialValues } from "../AuthUtils";
import { useAppDispatch, useAppSelector } from "../../../app/redux/hooks";
import { loginUser } from "../../../app/redux/slices/auth";
import { routes } from "../../../utils/routes";

interface formValues {
  username: string;
  password: string;
}

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { loading, isLoggedIn } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    navigate(routes.posts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      onSubmit={(values: formValues) => {
        dispatch(loginUser(values));
      }}
    >
      <Form>
        <div className="bg-[rgb(15,23,42)] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 mx-3 px-3 py-5">
          <MyInputArea label="Username" name="username" type="text" />
          <MyInputArea label="Password" name="password" type="password" />
        </div>
        <div className="flex justify-center mt-5">
          <Button
            width="w-28"
            className={`font-semibold transition-all duration-500 ${
              loading && "bg-opacity-50"
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
