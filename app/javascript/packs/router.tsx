import * as React from "react";
import * as ReactDOM from "react-dom";
import { Tabs, Tab } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";

export class Router extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/friends'>Friends</Link></li>
            </ul>
            <Route exact path='/' component={this.Home} />
            <Route path='/about' component={this.About} />
            <Route path='/friends' component={this.Friends} />
          </div>
          {/* <Tabs id="under">
            <Tab eventKey={1} title="Tab 1">1</Tab>
            <Tab eventKey={2} title="Tab 2">2</Tab>
            <Tab eventKey={3} title="Tab 3">3</Tab>
          </Tabs> */}
        </BrowserRouter>
      </div>
    );
  }

  public Home = () => (
    <div>
      <h2>Home</h2>
      <p>Welcome to ようこそ</p>
    </div>
  );
  public About = () => (
    <div>
      <h2>About</h2>
      <p>フレンズに投票するページです</p>
    </div>
  );
  public Friends = () => (
    <div>
      <h2>Friends</h2>
      <p>ここにフレンズのリストを書きます</p>
    </div>
  );
}