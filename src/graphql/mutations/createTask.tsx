import { gql } from "@apollo/client";

const CREATE_TASK = gql`
  mutation ($task: CreateTaskInput!) {
    createTask(input: $task) {
      dueDate
      id
      name
      pointEstimate
      position
      status
      tags
    }
  }
`;

export default CREATE_TASK;
