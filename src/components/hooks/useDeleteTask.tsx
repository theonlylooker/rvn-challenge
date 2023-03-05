import React, { FC } from "react";
import { useMutation } from "@apollo/client";
import DELETE_TASK from "../../graphql/mutations/deleteTask";
import GET_TASKS from "../../graphql/queries/getTasks";

const useDeleteTask = (id: string): { handleDelete: () => void } => {
  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: [{ query: GET_TASKS, variables: { task: {} } }],
  });
  const handleDelete = () => {
    deleteTask({ variables: { task: { id: id } } });
  };
  return { handleDelete };
};

export default useDeleteTask;
