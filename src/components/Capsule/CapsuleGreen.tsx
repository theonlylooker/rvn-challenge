import React, { FC } from "react";
import { CapsuleTypes } from "../../types/types";
import Capsule from "./Capsule";

const CapsuleGreen: FC<CapsuleTypes> = ({ children }) => {
  const capsuleGreen = (
    <Capsule bg="#70B25210" color="#70B252">
      {children}
    </Capsule>
  );
  return capsuleGreen;
};

export default CapsuleGreen;
