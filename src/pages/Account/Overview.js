
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function AccountOverview() {
  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Min konto</h2>
      <Row className="g-4">
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>Kontoopplysninger</Card.Title>
              <Card.Text>Se og rediger informasjon knyttet til kontoen din.</Card.Text>
              <Link to="/account/settings" className="btn btn-outline-primary">
                Gå til innstillinger
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>Mine annonser</Card.Title>
              <Card.Text>Se og administrer forespørslene du har publisert.</Card.Text>
              <Link to="/account/my-ads" className="btn btn-outline-primary">
                Gå til mine annonser
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>Mine favoritter</Card.Title>
              <Card.Text>Se en oversikt over annonsene du har lagret.</Card.Text>
              <Link to="/account/favorites" className="btn btn-outline-primary">
                Gå til favoritter
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>Innstillinger</Card.Title>
              <Card.Text>Administrer varsler og personlige preferanser.</Card.Text>
              <Link to="/account/settings" className="btn btn-outline-primary">
                Gå til innstillinger
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AccountOverview;
