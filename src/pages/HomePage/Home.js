import React, { useState, useRef } from "react";
import { InfoSection, Pricing } from "../../components";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
  homeObjFour,
  workingOne,
  workingThree,
  workingTwo,
  data,
  styles,
  config,
} from "./Data";
import { Container, Button } from "../../globalStyles";
import { Heading } from "../../components/InfoSection/InfoSection.elements";
import Faq from "react-faq-component";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { firestore } from "../../firebase";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const contactRef = useRef(null);
  const firstScrollRef = useRef(null);
  const handleSubmit = async event => {
    event.preventDefault();
    console.log('first 👉️', nameRef.current.value);
    console.log('last 👉️', emailRef.current.value);
    try {
        await addDoc(collection(firestore, 'users'), {
          name: nameRef.current.value,
          email: emailRef.current.value,
          contact: contactRef.current.value
        })
      } catch (err) {
        alert(err)
      }
    setShow(false);
  };
  const handleScrollClick = () => {
    firstScrollRef.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <>
      <Container style={{ background: "#101522", maxWidth: "100%" }}>
        <div style={{ display: "flex" }}>
          <h1 style={{ color: "white", fontSize: "30px" }}>
            IMLEX Beta is now OPEN - Get an early access to your Content-Friend,
            Try it now!
          </h1>
          <Button
            style={{
              position: "absolute",
              right: "20px",
              background: "purple",
            }}
            onClick={handleShow}
          >
            Enter the beta program!
          </Button>
        </div>
      </Container>
      <InfoSection {...homeObjOne} ref={firstScrollRef}/>
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...workingOne} />
      <InfoSection {...workingTwo} />
      <InfoSection {...workingThree} />
      <Pricing />
      <Faq data={data} styles={styles} config={config} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter your details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                ref={nameRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailRef}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contact No.</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter contact number"
                ref={contactRef}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Home;
