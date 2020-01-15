import React from "react";

const Blog = () => {
  return (
    <div id="blog">
      <div className="overlay">
        <div className="blog-area">
          <div className="blog-area__left">
            <small>CARE FOR YOUR FRIEND</small>
            <h1>VETERINARY CLINIC OF PALM HARBOR</h1>
            <p>Call today to schedule an appointement for your pet</p>
            <button>MAKE AN APPOINTEMENT</button>
          </div>
          <div className="blog-area__right">
            <small>CARE FOR YOUR FRIEND</small>
            <img
              src={`${process.env.PUBLIC_URL}/img/chien-stetoscope.jpg`}
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <a href="!#">READ MORE</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
