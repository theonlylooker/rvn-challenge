import React from "react";
import { useQuery } from "@apollo/client/react";
import Card from "./Card";
import { TasksQueryResponse, Status, Task } from "../types/types";
import GET_TASKS from "../graphql/queries/getTasks";

const ContentMain = () => {
  const { data, loading, error } = useQuery<TasksQueryResponse>(GET_TASKS, {
    variables: { user: {} },
  });
  let filterData: { [key in keyof typeof Status]?: Task[] } = {};
  if (loading) {
    return (
      <div className="m-auto">
        <h1 className="text-white">Loading...</h1>
      </div>
    );
  }
  if (data) {
    data.tasks.forEach((item) => {
      if (item.status in filterData) {
        filterData[item.status]?.push(item);
      } else {
        filterData[item.status] = [item];
      }
    });
  }

  return (
    <div className="grid grid-cols-4 gap-96 text-white overflow-x-scroll">
      {Object.entries(filterData).map((column) => (
        <div className="w-max">
          <h2 className="mb-5">
            {column[0]} (0{column[1]?.length})
          </h2>
          <div className="flex flex-col gap-4">
            {column[1]?.map((card) => (
              <Card
                key={card.id}
                name={card.name}
                dueDate={card.dueDate}
                id={card.id}
                pointEstimate={card.pointEstimate}
                position={card.position}
                status={card.status}
                tags={card.tags}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentMain;
