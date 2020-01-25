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
            <div>
              <label htmlFor="fullName">
                <input type="text" name="fullName" id="fullName" />
              </label>

              <label htmlFor="email">
                <input type="email" name="email" id="email" />
              </label>
            </div>

            <label htmlFor="message"> </label>
            <textarea name="message" cols="30" rows="5" id="message"></textarea>

            <input type="submit" value="SUBMIT" />
          </form>
        </div>
      </div>
    );
  }
}
