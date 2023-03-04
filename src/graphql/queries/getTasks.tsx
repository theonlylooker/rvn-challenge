import { gql } from "@apollo/client";

const GET_TASKS = gql`
  query ($user: FilterTaskInput!) {
    tasks(input: $user) {
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
