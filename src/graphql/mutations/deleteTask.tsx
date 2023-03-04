import { gql } from "@apollo/client";

const DELETE_TASK = gql`
  mutation ($task: DeleteTaskInput!) {
    deleteTask(input: $task) {
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

export default DELETE_TASK;
