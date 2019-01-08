import * as React from "react";
import * as ReactDOM from "react-dom";
import axios from "axios";
interface User {
  firstname: string;
  lastname: string;
  avatarUrl: string;
}

function getGreeting(username?: User) {
  if (username) {
    return <h1>Hello, {formatName(username)}!<div>{ele2}</div></h1>
  }
  return <h1>Hello, Stranger.<div>{ele1}</div></h1>
}

function formatName(username: User) {
  return username.firstname + " " + username.lastname;
};

const user = {
  firstname: "Harper",
  lastname: "Perez",
  avatarUrl: "http://www.google.com",
};

const ele1 = <div tabIndex={1}>good</div>;
const ele2 = <img src={user.avatarUrl} />;

const element = getGreeting();

const object = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, World",
);

function getUser() {
  axios.get("http://localhost:3000/api/v1/user")
    .then(
      (res) => {
        const userInfo =
          <div>
            <div>{res.data.name}</div>
            <div>It is {new Date().toLocaleTimeString()}.</div>
          </div>;
        console.log(userInfo);
        ReactDOM.render(
          userInfo,
          document.getElementById("user"),
        );
      }
    );
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    element,
    document.body.appendChild(document.createElement("div")),
  );
  ReactDOM.render(
    object,
    document.body.appendChild(document.createElement("div")),
  );
  ReactDOM.render(
    <div id="user" />,
    document.body.appendChild(document.createElement("div")),
  );
});

setInterval(getUser, 10000);
