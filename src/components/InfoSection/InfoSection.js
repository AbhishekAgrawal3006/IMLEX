import React, { useRef, useState } from "react";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoSection.elements";
import { Container, Button } from "../../globalStyles";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { firestore } from "../../firebase";
import Modal from "react-bootstrap/Modal";

const InfoSection = ({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
  noButton,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const nameRef = useRef("");
  const emailRef = useRef("");
  const contactRef = useRef("");
  const firstScrollRef = useRef(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("first 👉️", nameRef.current.value);
    console.log("last 👉️", emailRef.current.value);
    try {
      await addDoc(collection(firestore, "users"), {
        name: nameRef.current.value,
        email: emailRef.current.value,
        contact: contactRef.current.value,
      });
    } catch (err) {
      alert(err);
    }
    handleClose();
  };
  console.log(noButton);
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                {/* <Link to="/sign-up"> */}
                  {noButton === undefined ? (
                    <Button big fontBig primary={primary} onClick={handleShow}>
                      {buttonLabel}
                    </Button>
                  ) : null}
                {/* </Link> */}
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
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
      </InfoSec>
    </>
  );
};

export default InfoSection;
