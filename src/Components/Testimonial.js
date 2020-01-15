import React from "react";

const Testimonial = () => {
  const slides = [
    {
      id: 1,
      text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.Repellatculpa magnam corporis doloremque minima nemo dolorum, id totamvoluptas beatae mollitia dignissimos necessitatibus sed fugit
    excepturi ipsa harum magni labore porro voluptates quibusdam tempora
    quas sequi animi? Accusantium hic laboriosam provident quaerat ullam
    soluta reiciendis libero sit nobis? Quasi, sit?`,
      author: "Robert T",
      location: "Jura"
    },
    {
      id: 2,
      text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.Repellatculpa magnam corporis doloremque minima nemo dolorum, id totamvoluptas beatae mollitia dignissimos necessitatibus sed fugit
    excepturi ipsa harum magni `,
      author: "Jean B",
      location: "Montpellier"
    },
    {
      id: 3,
      text: ` amet consectetur adipisicing elit.Repellatculpa magnam corporis doloremque minima nemo dolorum, id totamvoluptas beatae mollitia dignissimos necessitatibus sed fugit, sit?`,
      author: "Roberta V",
      location: "Vosges"
    },
    {
      id: 4,
      text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.Repellatculpa magnam corporis doloremque minima nemo dolorum, id totamvoluptas beatae mollitia !`,
      author: "James G",
      location: "Marseille"
    },
    {
      id: 5,
      text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.Repellatculpa magnam corporis ?`,
      author: "Ray B",
      location: "Paris"
    },
    {
      id: 5,
      text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.Repellatculpa magnam corporis doloremque minima nemo dolorum, id totamvoluptas beatae mollitia dignissimos necessitatibus sed fugit
    excepturi ipsa harum magni labore porro voluptates quibusdam tempora
    quas sequi animi? Accusantium hic laboriosam provident quaerat ullam
    soluta reiciendis libero sit nobis? Quasi, sit?`,
      author: "Ginny T",
      location: "Brunswick,ME"
    }
  ];
  const [current, setCurrent] = React.useState(0);
  const { length } = slides;

  const gotoNext = () => {
    setCurrent(current !== length - 1 ? current + 1 : 0);
  };

  React.useEffect(() => {
    setTimeout(gotoNext, 5000);
  });

  return (
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
  );
};

export default Testimonial;
