import { FaPaw } from "react-icons/fa";

const DogHeader = () => {
  return (
    <div className="dog">
      <FaPaw className="text-3xl md:text-6xl absolute top-10 left-12 md:left-24 text-[rgb(19,41,65)]" />
      <FaPaw className="text-3xl md:text-6xl absolute bottom-1/2 right-16 md:right-32 text-[rgb(19,41,65)]" />
      <div className="dogRel bg-teal-500 top-3 md:top-7 right-12 md:right-24 border-textGrey-500">
        <img src="./Assets/dog-1.png" alt="dog" className="h-12 w-auto" />
      </div>
      <div className="dogRel bg-[#a1573a] left-5 md:left-10 top-1/2 border-[rgb(23,49,77)]">
        <img src="./Assets/dog-2.png" alt="dog" className="h-10 w-auto" />
      </div>
      <div className="diffDogRel bg-[#f2c45f] bottom-3 md:bottom-7 right-6 md:right-12">
        <img src="./Assets/cat-1.png" alt="dog" className="h-10 w-auto" />
      </div>
      <img src="./Assets/header-dog.png" alt="dog" className="h-3/4 w-auto" />
    </div>
  );
};

export default DogHeader;
