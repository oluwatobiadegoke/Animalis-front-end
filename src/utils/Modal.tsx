import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SwiperCore, { Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineClose } from "react-icons/ai";

import "swiper/css";
import { Media } from "../interfaces";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  imgs: Media[];
  displayIndex: number;
};

SwiperCore.use([Keyboard]);

export default function Modal({
  isOpen,
  setIsOpen,
  imgs,
  displayIndex,
}: ModalProps): JSX.Element {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-[rgb(23,49,77)] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-lg my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl">
                {/* THIS IS WHERE THE IMAGE APPEARS */}
                <div
                  className="flex justify-end mb-4 mr-2"
                  onClick={() => setIsOpen(false)}
                >
                  <AiOutlineClose className="text-textGrey-500 text-xl cursor-pointer hover:text-red-500 transition-all" />
                </div>
                <div className="mb-2 px-2">
                  <small className="text-textGrey-500">
                    <b className="text-green-500">Swipe</b> on touchscreen{" "}
                    <b className="text-green-500">or</b> use{" "}
                    <b className="text-green-500">keyboard</b> on pc to preview
                    the next or previous image(s).
                  </small>
                </div>
                <Swiper
                  initialSlide={displayIndex}
                  preventClicks={true}
                  keyboard={{ enabled: true }}
                >
                  {imgs.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img src={img.link} alt={img.type} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
