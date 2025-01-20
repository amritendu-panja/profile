import { Card, Col, Row } from "react-bootstrap";

export default function PersonalDetails() {
  return (
    <>
      <Card>
        <Card.Body>
            <Row>
                <Col md={3}>Date of Birth</Col>
                <Col md={1}>:</Col>
                <Col md="auto">29th January 1983</Col>
            </Row>
            <Row>
                <Col md={3}>Sex</Col>
                <Col md={1}>:</Col>
                <Col md="auto">Male</Col>
            </Row>
            <Row>
                <Col md={3}>Address</Col>
                <Col md={1}>:</Col>
                <Col md="auto"><strong>West Parijat, Uluberia, Howrah - 711315</strong></Col>
            </Row>
            <Row>
                <Col md={3}>Contact</Col>
                <Col md={1}>:</Col>
                <Col md="auto"><strong>+91-9883409151</strong></Col>
            </Row>
            <Row>
                <Col md={3}>Hobbies</Col>
                <Col md={1}>:</Col>
                <Col md="auto">Playing PC games, Drawing</Col>
            </Row>
            <Row>
                <Col md={3}>Marital Status</Col>
                <Col md={1}>:</Col>
                <Col md="auto">Married</Col>
            </Row>
        </Card.Body>
      </Card>
    </>
  );
}