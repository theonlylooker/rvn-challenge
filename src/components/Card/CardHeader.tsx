import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { CardHeaderType } from "../../types/types";
import useModal from "../hooks/useModal";
import { useMutation } from "@apollo/client";
import useDeleteTask from "../hooks/useDeleteTask";

const CardHeader: FC<CardHeaderType> = ({ name, id }) => {
  const { modal, handleModal } = useModal();
  const { handleDelete } = useDeleteTask(id);
  const handleDeleteButton = (e: React.SyntheticEvent) => {
    e.preventDefault;
    handleDelete();
    handleModal();
  };
  return (
    <div className="flex relative justify-between">
      <p>{name}</p>
      <button onClick={handleModal}>
        <FontAwesomeIcon icon={faEllipsis} />
      </button>
      <div
        className={`${
          modal === false ? "hidden" : "block"
        } absolute flex flex-col bg-rvnModalBG -right-1 top-5 p-3 rounded-md border-2 border-rvnTextSecondary`}
      >
        <ul>
          <li>
            <button>Edit</button>
          </li>
          <li>
            <button onClick={handleDeleteButton}>Delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardHeader;
