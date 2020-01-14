import React from "react";

const About = () => {
  return (
    <div id="about">
      <img
        src={`${process.env.PUBLIC_URL}/img/chiens-et-chats-patients.jpg`}
        alt="chiens et chats patients"
      />
      <div className="about-text">
        <small>ONLINE APPOINTEMENT</small>
        <h1>REQUEST APPOINTEMENT</h1>
        <p>
          We will do our best to accommodate your busy schedule. Request an
          appointment today! If it is an emergency, please call us.{" "}
        </p>
        <button>REQUEST NOW</button>
      </div>
    </div>
  );
};

export default About;
