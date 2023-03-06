import React, { FC } from "react";
import { CapsuleTypes } from "../../types/types";
import Capsule from "./Capsule";

const CapsuleYellow: FC<CapsuleTypes> = ({ children }) => {
  const capsuleYellow = (
    <Capsule bg="#E5B45410" color="#E5B454">
      {children}
    </Capsule>
  );
  return capsuleYellow;
};

export default CapsuleYellow;
