import React from "react";
import { Testi } from "../Context/TestimonialContext";
const Testimonial = () => {
  const TestimonialContext = React.createContext(Testi.slides);
  const slides = React.useContext(TestimonialContext);
  const [current, setCurrent] = React.useState(0);
  const { length } = slides;

  const gotoNext = () => {
    setCurrent(current !== length - 1 ? current + 1 : 0);
  };

  React.useEffect(() => {
    setTimeout(gotoNext, 30000);
  });

  return (
    <TestimonialContext.Provider value={slides}>
      <div id="testimonial">
        <h1>TESTIMONIALS</h1>
        {slides.map((slide, index) => (
          <div
            className={`testimonial-text ${
              index === current ? "slide-active" : "slide"
            }`}
          >
            <p>{slide.text}</p>
            <br />
            <strong>{slide.author} - </strong>
            <small>{slide.location}</small>
          </div>
        ))}
      </div>
    </TestimonialContext.Provider>
  );
};

export default Testimonial;
