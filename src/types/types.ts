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

export interface Task {
    dueDate: Date;
    id: number;
    name: string;
    position: number;
    pointEstimate: PointEstimate;
    status: Status;
    tags: TaskTag[];
}

export interface TasksQueryResponse {
    tasks: Task[];
}

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

export type taskList = Task[];