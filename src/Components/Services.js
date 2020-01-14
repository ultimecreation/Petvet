import React from "react";

const Services = () => {
  return (
    <div id="services">
      <div className="services__container">
        <h1>SERVICES</h1>
        <div className="services__cards">
          <div className="services__cards__single">
            <h6>REGISTRATION</h6>
            <p>
              An online form so we can gather some basic information before you
              arrive. We strive to be environmentally conscious by reducing our
              use of paper products. All medical records are maintained
              electronically.
            </p>
          </div>
          <div className="services__cards__single">
            <h6>FARMACY</h6>
            <p>
              Get your pet’s medication right to your home. The most convenient
              way to have your pet medications, prescription food and many other
              items delivered safely and securely from us to your door.
            </p>
          </div>

          <div className="services__cards__single">
            <h6>24/7 ASSISTANCE</h6>
            <p>
              Get your pet’s medication right to your home. The most convenient
              way to have your pet medications, prescription food and many other
              items delivered safely and securely from us to your door.
            </p>
          </div>
          <div className="services__cards__single">
            <h6>APPOINTEMENTS</h6>
            <p>
              Request appointments, get reminders, and have all of your pet’s
              information in one location. Download the app to your iPhone or
              Android phone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
