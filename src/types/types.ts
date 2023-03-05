import { ReactNode } from "react";

export enum PointEstimate {
    EIGHT,
    FOUR,
    ONE,
    TWO,
    ZERO,
}
export enum Status {
    BACKLOG,
    CANCELLED,
    DONE,
    IN_PROGRESS,
    TODO,
}
export enum TaskTag {
    ANDROID,
    IOS,
    NODE_JS,
    RAILS,
    REACT,
}

export interface User{
    fullName: string;
    avatar: string;
    email: string;
    id: number;
}

export interface UserQueryResponse{
    users: User[];
}

export interface Task {
    dueDate: Date;
    name: string;
    position: number;
    pointEstimate: PointEstimate;
    status: Status;
    tags: TaskTag[];
    id: number;
}

export interface TasksQueryResponse {
    tasks: Task[];
}

export type taskList = Task[];


export interface CardHeaderType {
    name: string;
}
export interface CardBodyTypes{
    dueDate: Date,
    pointEstimate:PointEstimate,
    tags: TaskTag[], 
}

export interface capsuleBaseTypes {
    bg: string;
    color: string;
    children: ReactNode;
  }

export interface CapsuleTypes {
    children: ReactNode;
  }

export interface CreateTaskInput{
    assigneeId?: string;
    dueDate?: Date;
    name?: string,
    pointEstimate?: PointEstimate,
    status: Status,
    tags: TaskTag[]
}

export interface CalendarType {
    handleChangeDate: (selectedDate: Date) => void;
  }

export interface ModalType{
    handleModal: ()=>void,
    modal: boolean,
}