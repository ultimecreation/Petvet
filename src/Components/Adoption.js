import React from "react";

const Adoption = () => {
  return (
    <div id="adoption">
      <img src={`${process.env.PUBLIC_URL}/img/petits-chiens.jpg`} alt="" />
      <div className="adoption-card">
        <small>TRUE FRIEND</small>
        <h1>SAVE A LIFE, ADOPT A PET</h1>
        <p>Call today to schedule an appointement for your pet</p>
      </div>
    </div>
  );
};

export default Adoption;
