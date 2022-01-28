import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import LoginForm from "../components/Auth/Login/LoginForm";

import { routes } from "../utils/routes";

const Login = () => {
  return (
    <main className="font-pri bg-gradient-to-tr from-[rgb(15,23,42)] via-[rgb(23,49,77)] to-teal-800 min-h-screen overflow-y-auto w-full text-textWhite-500">
      <Link to={routes.home}>
        <AiFillHome className="ml-3 mt-5 text-2xl" />
      </Link>
      <section className="max-w-3xl mx-auto w-full pt-6">
        <div className="text-center font-bold mb-6">
          <h1 className="text-2xl md:text-4xl lg:text-5xl ">Welcome to</h1>
          <h1 className="text-green-500 text-4xl md:text-7xl lg:text-7xl mb-4">
            Animal.Kg
          </h1>
          <p className="text-xs">Kindly type in your details to login</p>
        </div>
        <LoginForm />
      </section>
      <div className="text-center text-sm my-6">
        <span>Kindly</span>{" "}
        <Link to={routes.register} className="text-green-500 font-bold">
          register
        </Link>{" "}
        <span>if you don't have an account yet.</span>
      </div>
    </main>
  );
};

export default Login;
