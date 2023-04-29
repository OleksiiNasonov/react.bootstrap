import { useState } from "react";
import React from "react";
import { Navbar, Nav, Button, Container, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img7 from "../Images/img7.png"

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
`;

const NaviBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand> <img style={{width:"25px"}} alt="" src={img7}/>WebDev Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsiv-navbar-nav" />
            <Navbar.Collapse id="responsiv-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/react.bootstrap/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/react.bootstrap/users">
                  Users
                </Nav.Link>
                <Nav.Link as={Link} to="/react.bootstrap/about">
                  About
                </Nav.Link>
              </Nav>
              <Nav>
                <Button variant="primary" className="me-2" onClick={handleShow}>
                  Log in
                </Button>
                <Button variant="primary" onClick={handleShow}>
                  Sign out
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We`ll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Modal.Footer>
          <Button variant="success"className="me-2" type="submit">Save change</Button>
          <Button variant="danger" className="me-6" type="reset">Cansel</Button>
        </Modal.Footer>
          </Form>
        </Modal.Body>
        
      </Modal>
    </>
  );
};

export default NaviBar;
