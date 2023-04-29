import React from "react";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.jpg";
import img4 from "../Images/img4.jpg";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item style={{ height: "660px" }}>
        <img className="d-block w-100" src={img1} alt="The first slide" />
        <Carousel.Caption>
          <h3>Web Developer Blog</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "660px" }}>
        <img className="d-block w-100" src={img2} alt="The second slide" />
        <Carousel.Caption>
          <h3>Web Developer Blog</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "660px" }}>
        <img className="d-block w-100" src={img3} alt="The third slide" />
        <Carousel.Caption>
          <h3>Web Developer Blog</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "660px" }}>
        <img className="d-block w-100" src={img4} alt="The fourth slide" />
        <Carousel.Caption>
          <h3>Web Developer Blog</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
