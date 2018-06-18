import React from "react";
import ReactDOM from "react-dom";
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import "./index.css";
import TodoList from "./components/TodoList.js";
import Nav from "./components/Nav.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import ProfilePage from "./components/ProfilePage.js";


//import Loginscreen from './Loginscreen'


var destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    <Router history={browserHistory}>
      <Route path='/'>
      </Route>
      <Route path={"login"} component={Login}>
      </Route>
      <Route path={"register"} component={Register}>
      </Route>
      <Route path={"profile"} component={ProfilePage}>
      </Route>
    </Router>
    <div className="container">
      <div className="row">
        <Nav/>
      </div>
      <div className="row">
        <TodoList/>
      </div>
    </div>
  </div>,
    destination
);
