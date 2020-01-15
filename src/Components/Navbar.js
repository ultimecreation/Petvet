import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const { history } = this.props;
    return (
      <div className="navbar">
        <h4>PETVET</h4>

        <div className="menu" onClick={this.toggleMenu}>
          <img
            src={`${process.env.PUBLIC_URL}/img/menu-icon.png`}
            alt="menu icon"
          />
          <nav className={this.state.isOpen ? "open" : "closed"}>
            <HashLink
              to="/#home"
              className={
                history.location.hash === "#home" ? "active-navlink" : ""
              }
            >
              Home
            </HashLink>
            <HashLink
              to="/#about"
              className={
                history.location.hash === "#about" ? "active-navlink" : ""
              }
            >
              About
            </HashLink>
            <HashLink
              to="/#services"
              className={
                history.location.hash === "#services" ? "active-navlink" : ""
              }
            >
              Services
            </HashLink>
            <HashLink
              to="/#contact"
              className={
                history.location.hash === "#contact" ? "active-navlink" : ""
              }
            >
              Contact
            </HashLink>
          </nav>
        </div>
      </div>
    );
  }
}
export default withRouter(Navbar);
