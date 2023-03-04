import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { CardHeaderType } from "../../types/types";

const CardHeader: FC<CardHeaderType> = ({ name }) => {
  return (
    <div className="flex justify-between">
      <p>{name}</p>
      <button>
        <FontAwesomeIcon icon={faEllipsis} />
      </button>
    </div>
  );
};

export default CardHeader;
