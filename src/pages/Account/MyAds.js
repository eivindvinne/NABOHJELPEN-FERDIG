// src/pages/Account/MyAds.js
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function MyAds() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const storedAds = JSON.parse(localStorage.getItem("ads")) || [];
    setAds(storedAds);
  }, []);

  const handleDelete = (id) => {
    const updatedAds = ads.filter((ad) => ad.id !== id);
    setAds(updatedAds);
    localStorage.setItem("ads", JSON.stringify(updatedAds));
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Mine annonser</h2>

      {ads.length === 0 ? (
        <p className="text-center">Du har ikke publisert noen forespørsler ennå.</p>
      ) : (
        <Row className="g-4">
          {ads.map((ad) => (
            <Col md={6} lg={4} key={ad.id}>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>{ad.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{ad.name}</Card.Subtitle>
                  {ad.address && <Card.Text><strong>Adresse:</strong> {ad.address}</Card.Text>}
                  <Card.Text>{ad.description}</Card.Text>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(ad.id)}>
                    Slett annonse
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default MyAds;
