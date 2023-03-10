import { gql } from "@apollo/client";

const GET_TASKS = gql`
  query ($task: FilterTaskInput!) {
    tasks(input: $task) {
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

export default GET_TASKS;
