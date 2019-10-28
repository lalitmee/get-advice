import React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Container from "@material-ui/core/Container";

import "./styles.css";
import Layout from "./containers/Layout/Layout";
import * as utils from "./utils";

function App() {
  return (
    <ThemeProvider theme={utils.muiTheme}>
      <Container maxWidth="lg">
        <Layout />
      </Container>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
