import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <h1>CONTACT</h1>
        <div className="text-and-form">
          <p>
            Whichever specific health issue you’re currently facing, we’ll be
            more than glad to give you a pre-appointment, free consultation on
            it!
          </p>
          <form>
            <input type="text" name="fullName" />
            <input type="email" name="email" />
            <textarea name="message" cols="30" rows="5"></textarea>
            <input type="submit" value="SUBMIT" />
          </form>
        </div>
      </div>
    );
  }
}
