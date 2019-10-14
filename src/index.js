import React from "react";
import ReactDOM from "react-dom";
import Container from "@material-ui/core/Container";

import "./styles.css";
import Layout from "./containers/Layout/Layout";

function App() {
  return (
    <Container maxWidth="lg">
      <Layout />
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
