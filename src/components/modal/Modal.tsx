import React, { useState, FC } from "react";
import Datepicker from "tailwind-datepicker-react";
import GET_USERS from "../../graphql/queries/getUsers";
import CREATE_TASK from "../../graphql/mutations/createTask";
import GET_TASKS from "../../graphql/queries/getTasks";
import { useMutation, useQuery } from "@apollo/client";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CreateTaskInput,
  ModalType,
  Status,
  TaskTag,
  UserQueryResponse,
} from "../../types/types";

const options = {
  title: "",
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  maxDate: new Date("2030-01-01"),
  minDate: new Date("1950-01-01"),
  theme: {
    background: "bg-gray-700 dark:bg-gray-800",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "",
    input: "",
    inputIcon: "",
    selected: "bg-rvnRed",
  },
  icons: {
    prev: () => <FontAwesomeIcon icon={faChevronLeft} />,
    next: () => <FontAwesomeIcon icon={faChevronRight} />,
  },
  datepickerClassNames: "top-12",
  defaultDate: new Date("2022-01-01"),
  language: "en",
};

const Modal: FC<ModalType> = ({ handleModal, modal }) => {
  const initialForm: CreateTaskInput = {
    status: "BACKLOG" as unknown as Status,
    tags: [],
    name: "",
  };
  const { data, loading, error } = useQuery<UserQueryResponse>(GET_USERS);
  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: [{ query: GET_TASKS, variables: { task: {} } }],
  });
  const [form, setForm] = useState(initialForm);
  const [show, setShow] = useState<boolean>(false);

  const handleClose = (state: boolean) => {
    setShow(state);
  };

  const handleChangeDate = (selectedDate: Date) => {
    setForm({ ...form, dueDate: selectedDate });
  };

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

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createTask({ variables: { task: form } });
    setForm(initialForm);
    handleModal();
  };

  return (
    <div
      className={`absolute top-1/3 left-1/4 bg-rvnModalBG rounded-md p-4 text-white ${
        modal === true ? "block" : "hidden"
      }`}
    >
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          className="bg-rvnModalBG text-xl"
          value={form.name}
          onChange={handleChangeForm}
          name="name"
        />
        <div className="flex gap-4">
          <select
            name="pointEstimate"
            onChange={handleChangeForm}
            defaultValue="DEFAULT"
            className="bg-rvnTextSecondaryOpacity appearance-none py-1 px-4 rounded-md"
          >
            <option value="DEFAULT" disabled>
              Estimate
            </option>
            <option value="ZERO">0 points</option>
            <option value="ONE">1 points</option>
            <option value="TWO">2 points</option>
            <option value="FOUR">4 points</option>
            <option value="EIGHT">8 points</option>
          </select>

          <select
            name="assigneeId"
            defaultValue="DEFAULT"
            onChange={handleChangeForm}
            className="bg-rvnTextSecondaryOpacity appearance-none py-1 px-4 rounded-md"
          >
            <option disabled value="DEFAULT">
              Assignee
            </option>
            {data?.users.map((user, index) => (
              <option key={index} value={user.id}>
                {user.fullName}
              </option>
            ))}
          </select>
          <select
            name="tags"
            defaultValue="DEFAULT"
            onChange={handleChangeForm}
            className="bg-rvnTextSecondaryOpacity appearance-none py-1 px-4 rounded-md"
          >
            <option disabled value="DEFAULT">
              Label
            </option>
            <option value={"ANDROID"}>ANDROID</option>
            <option value={"IOS"}>IOS</option>
            <option value={"NODE_JS"}>NODE JS</option>
            <option value={"RAILS"}>RAILS</option>
            <option value={"REACT"}>REACT</option>
          </select>
          <div>
            <Datepicker
              options={options}
              onChange={handleChangeDate}
              show={show}
              setShow={handleClose}
            />
          </div>
        </div>
        <div className="flex gap-8 text-white justify-end">
          <button onClick={() => handleModal}>Cancel</button>
          <input
            type="submit"
            value="Create"
            className="bg-rvnRedAction rounded-md p-2"
          />
        </div>
      </form>
    </div>
  );
};

export default Modal;
