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
            <label htmlFor="fullname">
              <input type="text" name="fullName" id="fullname" />
            </label>
            <label htmlFor="email">
              <input type="email" name="email" id="email" />
            </label>
            <label htmlFor="message">
              <textarea name="message" cols="30" rows="5"></textarea>
            </label>

            <input type="submit" value="SUBMIT" />
          </form>
        </div>
      </div>
    );
  }
}
