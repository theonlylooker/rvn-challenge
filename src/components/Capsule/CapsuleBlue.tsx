import React, { FC } from "react";
import { CapsuleTypes } from "../../types/types";
import Capsule from "./Capsule";

const CapsuleBlue: FC<CapsuleTypes> = ({ children }) => {
  const capsuleBlue = (
    <Capsule bg="#2F61BF10" color="#2F61BF">
      {children}
    </Capsule>
  );
  return capsuleBlue;
};

export default CapsuleBlue;
