import React, { FC, ReactNode } from "react";
import { capsuleBaseTypes } from "../../types/types";

const Capsule: FC<capsuleBaseTypes> = ({ bg, color, children }) => {
  return (
    <div
      className={`${
        bg === "default" ? "bg-rvnTextSecondaryOpacity" : ""
      } bg-${bg} ${
        color === "default" ? "bg-inherit" : ""
      } text-${color}  py-2 px-4 font-bold rounded-md`}
    >
      {children}
    </div>
  );
};

export default Capsule;
