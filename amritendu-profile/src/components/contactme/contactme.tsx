import { Row, Col } from "react-bootstrap";
import gmail from '/gmail.png';
import outlook from '/outlook.png'
import linkedin from '/linkedin.png'

export default function ContactMe() {
  return (
    <>
      <Row className="justify-content-md-center">
        <Col><img src={gmail} className="footer-mail-icon"/>amritendu.panja@gmail.com</Col>
        <Col md="auto"><img src={outlook} className="footer-mail-icon"/>amritendu.panja@hotmail.com</Col>
        <Col className="text-end">
          <img src={linkedin} className="footer-mail-icon" />
          <a href="https://www.linkedin.com/in/amritendu-panja-92849624">www.linkedin.com/in/amritendu-panja-92849624</a>
        </Col>
      </Row>      
    </>
  );
}