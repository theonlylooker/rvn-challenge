import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import CREATE_TASK from "../../graphql/mutations/createTask";
import GET_TASKS from "../../graphql/queries/getTasks";
import { CreateTaskInput, Status, TaskTag } from "../../types/types";

const useAddTask = (): {
  form: CreateTaskInput;
  handleChangeForm: (e: React.SyntheticEvent) => void;
  handleChangeDate: (selectedDate: Date) => void;
  handleCreate: (e: React.SyntheticEvent) => void;
} => {
  const initialForm: CreateTaskInput = {
    status: "BACKLOG" as unknown as Status,
    tags: [],
    name: "",
  };
  const [form, setForm] = useState(initialForm);
  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: [{ query: GET_TASKS, variables: { task: {} } }],
  });

  const handleChangeForm = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    if (target.name === "tags") {
      let newTags = [...form.tags];
      let value = target.value as unknown as TaskTag;
      newTags.push(value);
      setForm({ ...form, [target.name]: newTags });
    } else {
      setForm({ ...form, [target.name]: target.value });
    }
  };

  const handleChangeDate = (selectedDate: Date) => {
    setForm({ ...form, dueDate: selectedDate });
  };
  const handleCreate = (e: React.SyntheticEvent) => {
    createTask({ variables: { task: form } });
    setForm(initialForm);
  };

  return { form, handleChangeForm, handleChangeDate, handleCreate };
};

export default useAddTask;
