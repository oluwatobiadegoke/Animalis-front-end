import { useState, Fragment, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineMail, AiOutlineEdit } from "react-icons/ai";
import { Tab } from "@headlessui/react";

import { demoUser } from "../../utils/DemoUser";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { DemoPosts } from "../../utils/DemoPosts";
import Modal from "../../utils/Modal";
import { routes } from "../../utils/routes";

const Posts = lazy(() => import("../../components/Posts/Posts"));

const UserProfile = () => {
  const { userId } = useParams();
  const [user] = useState(demoUser.find((user) => user.userId === userId)!);
  const [tabs] = useState<string[]>(["Posts", "Media"]);

  return (
    <div className="text-textWhite-500">
      <Modal />
      <div className="flex items-between justify-between mb-2">
        <img
          src={user.avatar}
          alt={user.username}
          className="object-cover h-28 w-28 rounded-full"
        />
        <div className="flex items-center gap-3">
          {userId === user.userId ? (
            <Link
              to={`${routes.profile}/edit`}
              className="flex items-center border border-textWhite-500 text-sm px-4 py-2 rounded-full hover:text-deepBlue-500 hover:bg-white hover:border-white transition-all gap-2"
            >
              <AiOutlineEdit className="text-2xl" /> <span>Edit Profile</span>
            </Link>
          ) : (
            <>
              <Link to={`/user/${user.userId}`}>
                <AiOutlineMail className="text-2xl" />
              </Link>
              <Button className=" text-sm h-9 px-4 font-semibold transition-all">
                Follow
              </Button>
            </>
          )}
        </div>
      </div>
      <p className="text-2xl font-bold mb-2">{user.username}</p>
      <p className="text-textGrey-500 text-sm mb-2">{user.bio}</p>
      <div className="mb-2">
        <div className="flex items-center gap-2 text-sm text-textGrey-500">
          <button className="flex items-center justify-center h-6 w-6 shadow shadow-textGrey-500 rounded-full ">
            <MdOutlineAlternateEmail className="text-lg" />
          </button>
          <span>{user.email}</span>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-2 text-sm ">
        <div className="flex items-center gap-2">
          <span className=" font-bold">128</span>
          <span className="text-textGrey-500">Following</span>
        </div>
        <div className="flex items-center gap-2">
          <span className=" font-bold">28</span>
          <span className="text-textGrey-500">Followers</span>
        </div>
      </div>
      <div className="h-[1px] w-full bg-textGrey-800 mb-4"></div>
      <Tab.Group>
        <Tab.List className="w-full flex justify-evenly mb-4">
          {tabs.map((tab, index) => (
            <Tab as={Fragment} key={index}>
              {({ selected }) => (
                <button
                  className={`font-bold border-b-2  ${
                    selected ? "border-teal-500" : "border-transparent"
                  }`}
                >
                  {tab}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <Suspense fallback={null}>
              <Posts DemoPosts={DemoPosts} />
            </Suspense>
          </Tab.Panel>
          <Tab.Panel>
            <Suspense fallback={null}>
              <Posts DemoPosts={DemoPosts} />
            </Suspense>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default UserProfile;
