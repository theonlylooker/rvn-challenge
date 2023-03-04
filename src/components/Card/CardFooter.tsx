import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faPaperclip,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
const CardFooter = () => {
  return (
    <div className="flex justify-between">
      <div>
        <FontAwesomeIcon icon={faUserTie} />
      </div>
      <div className="flex gap-4 text-xs">
        <div className="flex gap-1 items-center">
          <FontAwesomeIcon icon={faPaperclip} />
        </div>
        <div className="flex gap-1 items-center">
          5
          <FontAwesomeIcon icon={faDiagramProject} />
        </div>
        <div className="flex gap-1 items-center">
          3 <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
