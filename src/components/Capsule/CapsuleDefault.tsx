import React, { FC } from "react";
import { CapsuleTypes } from "../../types/types";
import Capsule from "./Capsule";

const CapsuleDefault: FC<CapsuleTypes> = ({ children }) => {
  const capsuleDefault = (
    <Capsule bg="default" color="default">
      {children}
    </Capsule>
  );
  return capsuleDefault;
};

export default CapsuleDefault;
