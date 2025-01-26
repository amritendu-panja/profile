import { Col, Row } from "react-bootstrap"

export default function Footer() { 
  return (
    <footer className="footer m-3">
      <Row className="justify-content-md-center">
        <Col md="auto">          
            &copy; {new Date().getFullYear()} Amritendu Panja. All rights reserved.
        </Col>
      </Row>
    </footer>
  );
}