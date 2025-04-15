// src/pages/Account/Favorites.js
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter((fav) => fav.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Mine favoritter</h2>

      {favorites.length === 0 ? (
        <p className="text-center">Du har ikke lagt til noen favoritter ennå.</p>
      ) : (
        <Row className="g-4">
          {favorites.map((fav) => (
            <Col md={6} lg={4} key={fav.id}>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>{fav.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{fav.name}</Card.Subtitle>
                  {fav.address && (
                    <Card.Text>
                      <strong>Adresse:</strong> {fav.address}
                    </Card.Text>
                  )}
                  <Card.Text>{fav.description}</Card.Text>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeFavorite(fav.id)}
                  >
                    Fjern fra favoritter
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

export default Favorites;
