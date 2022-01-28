import Button from "../../components/Button";
import { routes } from "../../utils/routes";
import { ReactComponent as GoodDog } from "../../Assets/good_dog.svg";

const Header = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mb-10">
      <div className="mb-4 md:mb-0">
        <div className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug mb-6">
          <h1>Discover and connect with</h1>
          <h1>fellow pet lovers here at</h1>
          <h1 className="text-green-500">Animal.Kgdm</h1>
        </div>
        <Button link={routes.register} width="w-28" className="font-semibold">
          Register
        </Button>
      </div>
      <div className="flex justify-center lg:justify-end">
        <GoodDog className="max-w-sm w-full h-auto" />
      </div>
    </div>
  );
};

export default Header;
