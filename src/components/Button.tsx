import { Link } from "react-router-dom";

import { IBtnProps } from "../interfaces";

const Button: React.FC<IBtnProps> = ({
  className = "",
  children,
  onClick,
  link = "none",
  type = "primary",
  disabled = false,
  width = "none",
  height = "none",
}) => {
  if (link !== "none") {
    return (
      <Link
        to={link}
        className={`flex items-center justify-center border border-textWhite-500 transition duration-500 rounded-full ${className} ${
          type === "primary"
            ? "bg-textWhite-500 text-deepBlue-500 hover:bg-transparent hover:text-textWhite-500 "
            : "bg-transparent text-textWhite-500 hover:bg-textWhite-500 hover:text-deepBlue-500 "
        } ${width === "none" ? " w-full " : width} ${
          height === "none" ? " h-[46px] " : height
        }`}
      >
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button
      className={`outline-none flex items-center justify-center border border-textWhite-500 rounded-full ${className} ${
        type === "primary"
          ? "bg-textWhite-500 text-deepBlue-500 border-textWhite-500 hover:bg-transparent hover:text-textWhite-500"
          : "bg-transparent text-textWhite-500 hover:bg-textWhite-500 hover:text-deepBlue-500"
      } ${width === "none" ? " w-full " : width} ${
        height === "none" ? " h-[46px] " : height
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
