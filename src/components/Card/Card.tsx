import React, { FC } from "react";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import CardBody from "./CardBody";
import { Task } from "../../types/types";

const Card: FC<Task> = ({ name, dueDate, pointEstimate, tags }) => {
  return (
    <div className="min-w-[348px] bg-rvnComponentBG rounded-md p-4 flex flex-col gap-3">
      <CardHeader name={name} />
      <CardBody dueDate={dueDate} pointEstimate={pointEstimate} tags={tags} />
      <CardFooter />
    </div>
  );
};

export default Card;
