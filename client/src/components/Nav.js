import React, { Component } from "react";
import { Link } from "react-router";
import "../index.css";

class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Property Management App</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
          </li>
          <li>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/login"><button className="btn btn-info log">Log In</button></a></li>
          <li><a href="/logout"><button className="btn btn-danger log">Log out</button></a></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
