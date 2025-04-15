
import React, { useState } from "react";
import styled from "styled-components";
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const Wrapper = styled.section`
  padding: 4rem 1rem;
  background-color: #f4f7f9;
`;

const StyledForm = styled(Form)`
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
  color: #2c3e50;
`;

function PostAd() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    address: "",
    description: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enkel validering
    if (formData.name && formData.title && formData.description) {
      const storedAds = JSON.parse(localStorage.getItem("ads")) || [];
      const newAd = { ...formData, id: Date.now() };
      localStorage.setItem("ads", JSON.stringify([...storedAds, newAd]));
      setSubmitted(true);

      setFormData({
        name: "",
        title: "",
        address: "",
        description: ""
      });

      
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <StyledForm onSubmit={handleSubmit}>
                <Title>Legg ut en forespørsel</Title>

                {submitted && (
                  <Alert variant="success">
                    Annonsen din er publisert! Du finner den under "Se annonser".
                  </Alert>
                )}

                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Navn</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Ditt navn"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>Overskrift</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Hva trenger du hjelp til? (kort tittel)"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                  <Form.Label>Gateadresse (valgfritt)</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    placeholder="F.eks. Storgata 15"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="description">
                  <Form.Label>Beskrivelse</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="description"
                    placeholder="Forklar nærmere hva du trenger hjelp til..."
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" type="submit" size="lg">
                    Publiser forespørsel
                  </Button>
                </div>
              </StyledForm>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default PostAd;
