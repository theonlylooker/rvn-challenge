import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { CardBodyTypes } from "../../types/types";
import CapsuleDefault from "../Capsule/CapsuleDefault";
import CapsuleAlert from "../Capsule/CapsuleAlert";

const CardBody: FC<CardBodyTypes> = ({ dueDate, pointEstimate, tags }) => {
  const date = new Date(dueDate);
  const today = new Date();
  const cardDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const daysPast = Math.ceil(
    Math.abs(date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );
  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <p>{pointEstimate} points</p>
          {today < date ? (
            <CapsuleDefault>
              <FontAwesomeIcon className="mr-2" icon={faClock} />
              <span>{cardDate}</span>
            </CapsuleDefault>
          ) : (
            <CapsuleAlert>
              <FontAwesomeIcon className="mr-2" icon={faClock} />
              <span>{daysPast} days ago</span>
            </CapsuleAlert>
          )}
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
