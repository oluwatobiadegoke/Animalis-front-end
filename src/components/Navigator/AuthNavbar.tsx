import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

interface Props {
  title?: string;
}

const AuthNavbar = ({ title }: Props) => {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[rgb(15,23,42)] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10">
      <div className="relative h-24 flex items-center gap-4 max-w-7xl mx-auto w-full px-3 xl:px-0">
        <button
          onClick={() => navigate(-1)}
          className="text-textWhite-500 md:mr-24 font-semibold"
        >
          <BiArrowBack className="text-2xl hover:text-textGrey-500 transition-all" />
        </button>
        <span className="text-textWhite-500 text-xl md:text-2xl ">{title}</span>
      </div>
    </nav>
  );
};

export default AuthNavbar;
