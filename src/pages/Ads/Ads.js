import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Container,
  Card,
  Button,
  Row,
  Col,
  Form,
  Modal,
  InputGroup,
} from "react-bootstrap";

const Wrapper = styled.section`
  padding: 4rem 1rem;
  background-color: #f4f7f9;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
`;

const StyledCard = styled(Card)`
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const FilterBar = styled.div`
  margin-bottom: 2rem;
`;

function Ads() {
  const [ads, setAds] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [currentAd, setCurrentAd] = useState(null);
  const [message, setMessage] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  useEffect(() => {
    const storedAds = JSON.parse(localStorage.getItem("ads")) || [];
    setAds(storedAds);
  }, []);

  const toggleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSendMessage = (ad) => {
    setCurrentAd(ad);
    setMessage("");
    setShowModal(true);
    setConfirmation(false);
  };

  const handleSubmitMessage = () => {
    if (message.trim() !== "") {
      setConfirmation(true);
      setTimeout(() => {
        setShowModal(false);
      }, 2500);
    }
  };

  const filteredAds = ads.filter(
    (ad) =>
      ad.title.toLowerCase().includes(searchQuery) ||
      ad.name.toLowerCase().includes(searchQuery)
  );

  return (
    <Wrapper>
      <Container>
        <SectionTitle>Se forespørsler fra naboer</SectionTitle>

        <FilterBar>
          <Row className="align-items-center">
            <Col md={8}>
              <InputGroup>
                <Form.Control
                  placeholder="Søk etter navn eller overskrift"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </InputGroup>
            </Col>
          </Row>
        </FilterBar>

        <Row>
          {filteredAds.length === 0 ? (
            <p className="text-center">Ingen annonser matcher søket.</p>
          ) : (
            filteredAds.map((ad) => (
              <Col md={6} lg={4} key={ad.id}>
                <StyledCard>
                  <Card.Body>
                    <Card.Title>{ad.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {ad.name}
                      {ad.address && ` – ${ad.address}`}
                    </Card.Subtitle>

                    {expandedId === ad.id && (
                      <Card.Text className="mb-3">{ad.description}</Card.Text>
                    )}

                    <div className="d-grid gap-2">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => toggleExpand(ad.id)}
                      >
                        {expandedId === ad.id ? "Skjul" : "Les mer"}
                      </Button>

                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleSendMessage(ad)}
                      >
                        Send melding
                      </Button>
                    </div>
                  </Card.Body>
                </StyledCard>
              </Col>
            ))
          )}
        </Row>
      </Container>

      {/* Melding Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Send melding til {currentAd?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {confirmation ? (
            <p className="text-success">Meldingen er sendt!</p>
          ) : (
            <>
              <Form.Group controlId="message">
                <Form.Label>Skriv din melding</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hei! Jeg kan kanskje hjelpe deg med..."
                />
              </Form.Group>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!confirmation && (
            <Button variant="primary" onClick={handleSubmitMessage}>
              Send
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Wrapper>
  );
}

export default Ads;
