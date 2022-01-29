import Button from "../../components/Button";
import { routes } from "../../utils/routes";
import DogHeader from "./DogHeader";

const Header = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-10 pt-2">
      <div className="mb-4 md:mb-0">
        <div className="text-4xl lg:text-6xl font-bold leading-snug mb-6">
          <h1>Connect with fellow</h1>
          <h1>pet lovers here at</h1>
          <h1 className="text-green-500">Animal.Kgdm</h1>
        </div>
        <Button link={routes.register} width="w-28" className="font-semibold">
          Register
        </Button>
      </div>
      <div className="flex justify-center lg:justify-end">
        <DogHeader />
      </div>
    </div>
  );
};

export default Header;
