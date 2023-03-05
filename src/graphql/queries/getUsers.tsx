import { gql } from "@apollo/client";

const GET_USERS = gql`
  query {
    users {
      fullName
      avatar
      id
    }
  }
`;

export default GET_USERS;
