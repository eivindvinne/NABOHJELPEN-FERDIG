// src/pages/Contact/Contact.js
import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Wrapper = styled.section`
  padding: 4rem 1rem;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
  font-weight: bold;
`;

const InfoBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  svg {
    margin-right: 0.75rem;
    color: #3498db;
  }

  span {
    font-size: 1.1rem;
  }
`;

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title>Kontakt oss</Title>
        <Row>
          <Col md={5}>
            <InfoBox>
              <h5>Kontaktinformasjon</h5>
              <ContactItem>
                <FaEnvelope />
                <span>eivindvinne@hotmail.com</span>
              </ContactItem>
              <ContactItem>
                <FaPhoneAlt />
                <span>+47 419 31 347</span>
              </ContactItem>
              <p>
                Har du spørsmål, forslag eller tilbakemeldinger? Send oss en melding via skjemaet eller ta kontakt direkte!
              </p>
            </InfoBox>
          </Col>
          <Col md={7}>
            <InfoBox>
              <h5>Send en melding</h5>
              {submitted && (
                <Alert variant="success">
                  Takk for meldingen! Vi svarer deg så snart vi kan.
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Navn</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>E-post</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="message">
                  <Form.Label>Melding</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button type="submit" variant="primary" size="lg">
                    Send
                  </Button>
                </div>
              </Form>
            </InfoBox>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default Contact;
