
import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";
import heroBg from "../../assets/tromsø.jpg";

const HeroSection = styled.section`
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  color: white;
`;

const HeroOverlay = styled.div`
  background: rgba(0, 0, 0, 0.65);
  padding: 3rem;
  border-radius: 12px;
  max-width: 800px;
`;

const Section = styled.section`
  padding: 5rem 1rem;
  background-color: ${(props) => props.bg || "white"};
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const StyledCard = styled(Card)`
  border: none;
  background: #ffffffdd;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Icon = styled.div`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

function About() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay>
          <h1>Om Nabohjelpen</h1>
          <p>
            Et initiativ for å gjøre det enklere å spørre om hjelp, og enda enklere å tilby den.
          </p>
        </HeroOverlay>
      </HeroSection>

      {/* Intro Section */}
      <Section>
        <Container>
          <Title>Hvorfor Nabohjelpen?</Title>
          <Text>
            Nabohjelpen er laget for å senke terskelen for å spørre om hjelp, og for å gjøre
            det enklere å bidra i sitt eget nabolag. Gjennom en enkel plattform kobles folk sammen
            for å låne, hjelpe, løfte og dele. Det handler ikke om betaling, det handler om tillit
            og fellesskap.
          </Text>
        </Container>
      </Section>

      {/* Verdier */}
      <Section bg="#f8f9fa">
        <Container>
          <Title>Våre kjerneverdier</Title>
          <Grid>
            <StyledCard className="p-4">
              <Card.Body>
                <Icon>🤝</Icon>
                <Card.Title>Gjensidighet</Card.Title>
                <Card.Text>
                  Å gi og få hjelp er like verdifullt. Vi senker terskelen for begge deler.
                </Card.Text>
              </Card.Body>
            </StyledCard>
            <StyledCard className="p-4">
              <Card.Body>
                <Icon>🌱</Icon>
                <Card.Title>Bærekraft</Card.Title>
                <Card.Text>
                  Vi fremmer gjenbruk, sparer ressurser og reduserer forbruk gjennom deling.
                </Card.Text>
              </Card.Body>
            </StyledCard>
            <StyledCard className="p-4">
              <Card.Body>
                <Icon>🏘️</Icon>
                <Card.Title>Fellesskap</Card.Title>
                <Card.Text>
                  Gjennom Nabohjelpen bygger vi relasjoner, tillit og trygghet i nabolaget.
                </Card.Text>
              </Card.Body>
            </StyledCard>
          </Grid>
        </Container>
      </Section>

      {/* Avslutning */}
      <Section>
        <Container>
          <Title>En ny giv til dugnadsånden</Title>
          <Text>
            
          </Text>
        </Container>
      </Section>
    </>
  );
}

export default About;
