import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBorderAll,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "./modal/Modal";
import useModal from "./hooks/useModal";

const AlignBar = () => {
  const { modal, handleModal } = useModal();
  return (
    <div className="flex justify-between text-2xl text-white">
      <div className="flex gap-2 items-center cursor-pointer">
        <button className="px-2 rounded-lg focus-within:text-rvnRed focus-within:outline outline-rvnRed hover:text-rvnRed">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <button className="px-2 rounded-lg focus-within:text-rvnRed focus-within:outline outline-rvnRed hover:text-rvnRed">
          <FontAwesomeIcon icon={faBorderAll} />
        </button>
      </div>
      <div>
        <button onClick={handleModal}>
          <FontAwesomeIcon
            className="text-rvnRed border-none text-4xl z-10"
            icon={faSquarePlus}
          />
        </button>
        <Modal handleModal={handleModal} modal={modal} />
      </div>
    </div>
  );
};

export default AlignBar;
