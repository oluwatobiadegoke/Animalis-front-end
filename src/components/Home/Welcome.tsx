import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

import { routes } from "../../utils/routes";

const Welcome = () => {
  return (
    <div className="">
      <section className="flex flex-col gap-6 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ut
          fugit provident eveniet quasi minus inventore quo numquam possimus
          consequatur!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam qui
          aliquid quo est sint, dolorum illum facere nisi numquam ipsum. Quaerat
          dicta, voluptatibus soluta ullam nostrum porro expedita at nobis?
        </p>
        <Link
          to={routes.marketplace}
          className="flex items-center gap-4 underline text-green-500"
        >
          <span>Take a look at our store</span>
          <AiOutlineArrowRight />
        </Link>
      </section>
    </div>
  );
};

export default Welcome;
