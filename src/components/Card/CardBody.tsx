import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { CardBodyTypes } from "../../types/types";
import CapsuleDefault from "../Capsule/CapsuleDefault";
import CapsuleAlert from "../Capsule/CapsuleAlert";

const CardBody: FC<CardBodyTypes> = ({ dueDate, pointEstimate, tags }) => {
  console.log(dueDate);
  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <p>{pointEstimate} points</p>
          <CapsuleDefault>
            <FontAwesomeIcon className="mr-2" icon={faClock} />
            <span>TODAY</span>
          </CapsuleDefault>
        </div>
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <CapsuleDefault key={index}>{tag}</CapsuleDefault>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardBody;
