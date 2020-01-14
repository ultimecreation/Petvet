import React from "react";

const Home = () => {
  return (
    <div id="home">
      <img
        src={`${process.env.PUBLIC_URL}/img/chien-header.jpg`}
        alt="chien et vétérinaire"
      />
      <div className="home-text">
        <small>CARE FOR YOUR FRIEND</small>
        <h1>VETERINARY CLINIC OF PALM HARBOR</h1>
        <p>Call today to schedule an appointement for your pet</p>
        <button>MAKE AN APPOINTEMENT</button>
      </div>
    </div>
  );
};

export default Home;
