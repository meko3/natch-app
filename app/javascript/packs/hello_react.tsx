// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import * as React from "react"
import * as ReactDOM from "react-dom"
import axios from "axios";

interface HelloProps {
  name: string;
  user: string;
}

class Sample {

  public static user: string;

  constructor() {
    Sample.user = "";
  }

  componentWillMount() {
    Sample.getData();
  }

  componentWillReceiveProps() {
    
  }
  
  public static getData() {
    axios.get("http://localhost:3000/api/v1/user").then((res) => {
      console.log(res);
      Sample.user = res.data.name as string;
    });
  }

  public static Hello: React.SFC<HelloProps> = (props) => (
    <div>
      <div>Hello {props.name}!</div>
      <div>Hello {props.user}!</div>
      <button onClick={Sample.getData}>RELOAD</button>
    </div>
  )

}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Sample.Hello name="React" user={Sample.user} />,
    document.body.appendChild(document.createElement("div")),
  )
})
