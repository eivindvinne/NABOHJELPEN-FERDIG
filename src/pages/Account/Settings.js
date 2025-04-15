
import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Alert,
  Image,
} from "react-bootstrap";

function Settings() {
  const [formData, setFormData] = useState({
    emailNotifications: true,
    phoneVisible: false,
    language: "nb",
    darkMode: false,
    newPassword: "",
    confirmPassword: "",
  });

  const [saved, setSaved] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      setPasswordError("Passordene matcher ikke.");
      return;
    }

    setPasswordError("");
    setSaved(true);
    setTimeout(() => setSaved(false), 4000);
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Er du sikker på at du vil slette kontoen din?")) {
      alert("Kontoen din er nå slettet.");
    }
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Innstillinger</h2>

      <Row className="justify-content-center">
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            {saved && <Alert variant="success">Innstillingene er lagret.</Alert>}

            {/* Profilbilde */}
            <Form.Group className="mb-4 text-center">
              <Image
                src={profileImage || "https://via.placeholder.com/120"}
                roundedCircle
                width={120}
                height={120}
              />
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mt-2"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Send meg e-postvarsler"
                name="emailNotifications"
                checked={formData.emailNotifications}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Vis telefonnummeret mitt på annonser"
                name="phoneVisible"
                checked={formData.phoneVisible}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Dark Mode"
                name="darkMode"
                checked={formData.darkMode}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Språk</Form.Label>
              <Form.Select
                name="language"
                value={formData.language}
                onChange={handleChange}
              >
                <option value="nb">Norsk</option>
                <option value="en">Engelsk</option>
              </Form.Select>
            </Form.Group>

            {/* Endre passord */}
            <Form.Group className="mb-3">
              <Form.Label>Nytt passord</Form.Label>
              <Form.Control
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Bekreft nytt passord</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {passwordError && <small className="text-danger">{passwordError}</small>}
            </Form.Group>

            <div className="d-grid mb-3">
              <Button variant="primary" type="submit">
                Lagre endringer
              </Button>
            </div>

            <hr />

            {/* Slett konto */}
            <div className="d-grid">
              <Button variant="outline-danger" onClick={handleDeleteAccount}>
                Slett kontoen min
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Settings;
