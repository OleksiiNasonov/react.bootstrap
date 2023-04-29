import React from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import img from "../Images/img5.png"
const Styles = styled.div`
.card{
  background: url(${img}) no-repeat fixed top ;
  background-size: cover;
  color: #efefef;
  height: 660px;
  position: relative;
  z-index: -2;
}
`

const Jambotron = () => {
  return (
    <Styles>
    <Card bg="secondary" className="my-4">
      <Card.Body>
        <Container>
          <h1>Web Developer Blog</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed ultrices ipsum. Curabitur in facilisis ex. Duis a lobortis nunc. In iaculis ex eu convallis elementum. Sed eget semper risus. Praesent non gravida est, a lobortis libero. Pellentesque ac ipsum at augue bibendum aliquam. Mauris aliquam laoreet massa, auctor dignissim sem molestie ac. Aenean iaculis odio id arcu imperdiet consequat. Vivamus vel semper odio, ac imperdiet sapien. Cras eu massa placerat, iaculis est eu, molestie erat. Mauris sed nibh id nulla sodales aliquam. Proin fringilla tincidunt est et condimentum. Phasellus ut vehicula lorem. Donec enim purus, dapibus non accumsan eget, interdum sed magna. Aenean ut auctor sapien.Aenean pulvinar lacus bibendum dictum faucibus. Phasellus aliquam ante eget velit mollis, sed aliquet tortor dignissim. Maecenas auctor feugiat diam, pulvinar sagittis nibh hendrerit convallis. Fusce viverra purus eros, eget consequat velit viverra eget. Ut vitae finibus est. Vestibulum gravida accumsan nisi ac consectetur. Phasellus aliquet mattis eros, sit amet elementum orci volutpat ut. Nullam scelerisque dui at nunc fringilla, et aliquam metus congue. Mauris ullamcorper nisi libero, et ornare orci blandit nec. Quisque ut tempor arcu, quis rutrum purus. Maecenas porttitor ligula et justo ultrices congue at ac nunc. Phasellus molestie suscipit massa at ultricies. Praesent eget nisl felis. Integer nec suscipit magna.
          </p>
        </Container>
      </Card.Body>
    </Card>
    </Styles>
  );
};

export default Jambotron;
