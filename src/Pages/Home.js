
import React from "react";
import Slider from "../Components/Slider";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import imgCard1 from "../Images/imgCard1.jpg";
import imgCard2 from "../Images/imgCard2.jpg";
import imgCard3 from "../Images/imgCard3.jpg";
import imgCard4 from "../Images/imgCard4.jpg";
import img6 from "../Images/img6.jpg";
import Jambotron from "../Components/Jambotron";


const Home = () => {
  return (
    <>
      <Slider />
      <Container style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "18rem" }}
                variant="top"
                src={imgCard1}
              ></Card.Img>
              <Card.Body>
                <Card.Title>WebDev Blog</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "18rem" }}
                variant="top"
                src={imgCard2}
              ></Card.Img>
              <Card.Body>
                <Card.Title>WebDev Blog</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "18rem" }}
                variant="top"
                src={imgCard3}
              ></Card.Img>
              <Card.Body>
                <Card.Title>WebDev Blog</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "18rem" }}
                variant="top"
                src={imgCard4}
              ></Card.Img>
              <Card.Body>
                <Card.Title>WebDev Blog</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Jambotron />
      <Container style={{marginBottom:"30px"}}>
        <Row>
          <Col md={7}>
            <img src={img6} alt="developer" height={400}/>
          </Col>
          <Col md={5}>
          <h2>Web Developer Blog</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed ultrices ipsum. Curabitur in facilisis ex. Duis a lobortis nunc. In iaculis ex eu convallis elementum. Sed eget semper risus. Praesent non gravida est, a lobortis libero. Pellentesque ac ipsum at augue bibendum aliquam. Mauris aliquam laoreet massa, auctor dignissim sem molestie ac. Aenean iaculis odio id arcu imperdiet consequat. Vivamus vel semper odio, ac imperdiet sapien. Cras eu massa placerat, iaculis est eu, molestie erat. Mauris sed nibh id nulla sodales aliquam. Proin fringilla tincidunt est et condimentum. Phasellus ut vehicula lorem. Donec enim purus, dapibus non accumsan eget, interdum sed magna. Aenean ut auctor sapien.Aenean pulvinar lacus bibendum dictum faucibus. Phasellus aliquam ante eget velit mollis, sed aliquet tortor dignissim. Maecenas auctor feugiat diam, pulvinar sagittis nibh hendrerit convallis. Fusce viverra purus eros, eget consequat velit viverra eget. Ut vitae finibus est. Vestibulum gravida accumsan nisi ac consectetur. Phasellus aliquet mattis eros, sit amet elementum orci volutpat ut. Nullam scelerisque dui at nunc fringilla, et aliquam metus congue. Mauris ullamcorper nisi libero, et ornare orci blandit nec. Quisque ut tempor arcu, quis rutrum purus. Maecenas porttitor ligula et justo ultrices congue at ac nunc. Phasellus molestie suscipit massa at ultricies. Praesent eget nisl felis. Integer nec suscipit magna.
          </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
