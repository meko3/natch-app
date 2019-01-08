import * as React from "react";
import * as ReactDOM from "react-dom";
import { Tabs, Tab } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";

import { Router } from "./router";

class Main extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Main App</div>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Main />,
    document.body.appendChild(document.createElement("div")),
  );
  ReactDOM.render(
    <Router />,
    document.body.appendChild(document.createElement("div")),
  );
});