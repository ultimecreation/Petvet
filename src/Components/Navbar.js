import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <h4>PETVET</h4>

        <div className="menu">
          <img
            src={`${process.env.PUBLIC_URL}/img/menu-icon.png`}
            alt="menu icon"
          />
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
