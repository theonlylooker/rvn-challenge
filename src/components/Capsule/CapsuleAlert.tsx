import React, { FC } from "react";
import { CapsuleTypes } from "../../types/types";
import Capsule from "./Capsule";

const CapsuleAlert: FC<CapsuleTypes> = ({ children }) => {
  const capsuleAlert = (
    <Capsule bg="#DA584B10" color="rvnRed">
      {children}
    </Capsule>
  );
  return capsuleAlert;
};

export default CapsuleAlert;
