import { Link } from "react-router-dom";
import { FaListAlt, FaUserAlt } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import { routes } from "../../utils/routes";

const AuthLgScNav = () => {
  return (
    <nav className="flex items-center justify-end gap-8 text-lg text-textWhite-500 flex-1">
      <Link
        to={`${routes.post}/upload`}
        className="group flex items-center lg:flex-1 lg:shadow-lg lg:border-t-2 border-t-textGrey-700 rounded-full lg:px-4 h-10"
      >
        <button className=" text-xl group-hover:text-[#f2c45f] transition-all lg:mr-4">
          <HiPencilAlt />
        </button>
        <div className="w-full hidden lg:block group-hover:text-[#f2c45f] transition-all">
          <span className="text-sm">Tell us something...</span>
        </div>
      </Link>
      <Link to={routes.posts} className="hover:text-[#a1573a] transition-all">
        <FaListAlt />
      </Link>
      <Link to={routes.profile} className="hover:text-teal-500 transition-all">
        <FaUserAlt />
      </Link>
    </nav>
  );
};

export default AuthLgScNav;
