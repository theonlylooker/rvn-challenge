import React from "react";
import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import App from "./App";
import "./index.css";

const httpLink = createHttpLink({
  uri: "https://syn-api-prod.herokuapp.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiOTNhNTk5YTFkMmQ4IiwicHJvamVjdElkIjoiMTQwYzZhYzgtMTdiZS00NzcxLThkMjUtNWI4ZmQ3NWE4N2JjIiwiZnVsbE5hbWUiOiJFZHVhcmRvIFJvbGFuZG8gQmFzdXJjbyBDYXlsbGFodWEiLCJlbWFpbCI6ImViYXN1cmNvY0BnbWFpbC5jb20iLCJpYXQiOjE2Nzc2MjM3MzV9.mSvI-DF9zLG6x3dJyiDiAm3ebd07ZGJ_QZA2SrWSteI`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
