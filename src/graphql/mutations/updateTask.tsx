import { gql } from "@apollo/client";

const UPDATE_TASK = gql`
  mutation ($task: CreateTaskInput!) {
    updateTask(input: $task) {
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

export default UPDATE_TASK;
