
import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import heroImage from "../../assets/forside.png";

const HeroSection = styled.section`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  padding: 8rem 1rem;
  color: white;
  text-align: center;
  position: relative;
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.55);
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 12px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const FeatureSection = styled.section`
  padding: 5rem 1rem;
  background-color: #f8f9fa;
`;

const CTASection = styled.section`
  background-color: #2c3e50;
  color: white;
  padding: 4rem 1rem;
  text-align: center;
`;

function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection>
        <Overlay>
          <Title>Velkommen til NaboHjelpen</Title>
          <Subtitle>
            En digital møteplass for hjelp, fellesskap og deling mellom naboer.
          </Subtitle>
          <Button variant="light" size="lg" as={Link} to="/post-ad">
            Legg ut forespørsel
          </Button>
        </Overlay>
      </HeroSection>

      {/* Features */}
      <FeatureSection>
        <Container>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>Be om hjelp</Card.Title>
                  <Card.Text>
                    Del hva du trenger – alt fra flyttehjelp til lån av verktøy.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>Tilby hjelp</Card.Title>
                  <Card.Text>
                    Finn forespørsler fra andre i ditt nabolag og bidra med det du kan.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>Bygg fellesskap</Card.Title>
                  <Card.Text>
                    Gjennom små handlinger skaper vi tryggere og varmere nabolag.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </FeatureSection>

      {/* Call to Action */}
      <CTASection>
        <Container>
          <h2>Bidra til et bedre nabolag i dag</h2>
          <p>Trykk deg videre og bli med på å gjøre en forskjell.</p>
          <Button variant="light" size="lg" as={Link} to="/ads">
            Se forespørsler
          </Button>
        </Container>
      </CTASection>
    </>
  );
}

export default Home;
