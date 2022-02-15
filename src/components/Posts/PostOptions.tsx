import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsShareFill, BsThreeDotsVertical, BsTrash } from "react-icons/bs";
import { RWebShare } from "react-web-share";

import { PostProps } from "../../interfaces";
import {
  // useAppDispatch,
  useAppSelector,
} from "../../app/redux/hooks";

interface PostOptionsProps {
  post: PostProps;
}

const PostOptions: React.FC<PostOptionsProps> = ({ post }) => {
  //   const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  return (
    <div className="absolute right-1 top-3">
      <Menu as="div">
        <div className="w-full flex items-center justify-end">
          <Menu.Button>
            <BsThreeDotsVertical className="text-xl" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="mt-2 mr-2 origin-top-right bg-gradient-to-tr from-[rgb(15,23,42)] via-[rgb(23,49,77)] to-teal-800 divide-y divide-textGrey-800 rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              <RWebShare
                data={{
                  text: "",
                  url: `${window.location.pathname}`,
                  title: "Animalis",
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <button className="flex items-center px-4 py-2 gap-3">
                  <BsShareFill />
                  <span>Share</span>
                </button>
              </RWebShare>
            </Menu.Item>
            {post.userId === user!.userId && (
              <Menu.Item>
                <button className="flex items-center px-4 py-2 gap-3">
                  <BsTrash className="text-red-400" />
                  <span>Delete</span>
                </button>
              </Menu.Item>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default PostOptions;
