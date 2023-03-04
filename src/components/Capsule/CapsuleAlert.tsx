import React, { FC } from "react";
import { CapsuleTypes } from "../../types/types";
import Capsule from "./Capsule";

const CapsuleAlert: FC<CapsuleTypes> = ({ children }) => {
  const capsuleAlert = (
    <Capsule bg="rvnRedOpacity" color="rvnRed">
      {children}
    </Capsule>
  );
  return capsuleAlert;
};

export default CapsuleAlert;
