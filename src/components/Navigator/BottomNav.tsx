import { Link } from "react-router-dom";
import { FaListAlt, FaUserAlt } from "react-icons/fa";
import { AiOutlinePoweroff } from "react-icons/ai";
import { HiPencilAlt } from "react-icons/hi";
import { routes } from "../../utils/routes";
import useScrolling from "../../utils/useScrolling";
import { logOutUser } from "../../app/redux/slices/auth";
import { useAppSelector, useAppDispatch } from "../../app/redux/hooks";

const BottomNav = () => {
  const dispatch = useAppDispatch();
  const isScrolling = useScrolling();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  return (
    <nav
      className={`${!isLoggedIn && "hidden"} md:hidden fixed ${
        isScrolling ? " bottom-4 opacity-1 " : " -bottom-full opacity-0 "
      } left-0 right-0 w-full h-10 transition-all duration-1000`}
    >
      <div className="flex items-center justify-evenly h-10 gap-8 text-textGrey-500 bg-[rgb(15,23,42)] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 w-1/2 mx-auto rounded-full">
        <button className=" text-xl hover:text-[#f2c45f] transition-all duration-50">
          <HiPencilAlt />
        </button>
        <Link
          to={routes.posts}
          className="hover:text-[#a1573a] transition-all duration-500"
        >
          <FaListAlt />
        </Link>
        <Link
          to={routes.profile}
          className="hover:text-teal-500 transition-all duration-500"
        >
          <FaUserAlt />
        </Link>
        <button
          onClick={() => dispatch(logOutUser())}
          className="hover:text-red-500 transition-all"
        >
          <AiOutlinePoweroff className="text-xl" />
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
