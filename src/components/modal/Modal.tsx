import React, { FC } from "react";
import GET_USERS from "../../graphql/queries/getUsers";
import { useQuery } from "@apollo/client";
import { ModalType, UserQueryResponse } from "../../types/types";
import useCreateTask from "../hooks/useCreateTask";
import Calendar from "../Calendar";

const Modal: FC<ModalType> = ({ handleModal, modal }) => {
  const { form, handleChangeForm, handleChangeDate, handleCreate } =
    useCreateTask();
  const { data, loading, error } = useQuery<UserQueryResponse>(GET_USERS);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault;
    handleCreate(e);
    handleModal;
  };

  const handleCancel = (e: React.SyntheticEvent) => {
    e.preventDefault;
    handleModal;
  };
  return (
    <div
      className={`absolute top-1/3 left-1/4 z-10 bg-rvnModalBG rounded-md p-4 text-white ${
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
            <option className="bg-rvnModalBG" value="DEFAULT" disabled>
              Estimate
            </option>
            <option className="bg-rvnModalBG" value="ZERO">
              0 points
            </option>
            <option className="bg-rvnModalBG" value="ONE">
              1 points
            </option>
            <option className="bg-rvnModalBG" value="TWO">
              2 points
            </option>
            <option className="bg-rvnModalBG" value="FOUR">
              4 points
            </option>
            <option className="bg-rvnModalBG" value="EIGHT">
              8 points
            </option>
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
              <option className="bg-rvnModalBG" key={index} value={user.id}>
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
            <option className="bg-rvnModalBG" disabled value="DEFAULT">
              Label
            </option>
            <option className="bg-rvnModalBG" value={"ANDROID"}>
              ANDROID
            </option>
            <option className="bg-rvnModalBG" value={"IOS"}>
              IOS
            </option>
            <option className="bg-rvnModalBG" value={"NODE_JS"}>
              NODE JS
            </option>
            <option className="bg-rvnModalBG" value={"RAILS"}>
              RAILS
            </option>
            <option className="bg-rvnModalBG" value={"REACT"}>
              REACT
            </option>
          </select>
          <Calendar handleChangeDate={handleChangeDate} />
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
