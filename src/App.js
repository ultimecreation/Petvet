import React from "react";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Testimonial from "./Components/Testimonial";
import Blog from "./Components/Blog";
import Services from "./Components/Services";
import Adoption from "./Components/Adoption";
import Contact from "./Components/Contact";
import Map from "./Components/Map";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Testimonial />
      <Blog />
      <Services />
      <Adoption />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
