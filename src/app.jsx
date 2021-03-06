import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
// 页面
import Home from "pages/home/index.jsx";
import Layout from "component/layout/index.jsx";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />
            <Redirect from="*" to="/" />
          </Layout>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
