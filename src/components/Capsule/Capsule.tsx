import React, { FC, ReactNode } from "react";
import { capsuleBaseTypes } from "../../types/types";

const Capsule: FC<capsuleBaseTypes> = ({ bg, color, children }) => {
  return (
    <div
      className={`py-2 px-4 text-${color} font-bold rounded-md`}
      style={{ backgroundColor: bg, color: color }}
    >
      {children}
    </div>
  );
};

export default Capsule;
