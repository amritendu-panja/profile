import { ListGroup } from "react-bootstrap";
import gmail from '/gmail.png';
import outlook from '/outlook.png'

export default function ContactMe() {
  return (
    <ListGroup>
      <ListGroup.Item><img src={gmail} className="footer-mail-icon"/> amritendu.panja@gmail.com</ListGroup.Item>
      <ListGroup.Item><img src={outlook} className="footer-mail-icon"/> amritendu.panja@hotmail.com</ListGroup.Item>
    </ListGroup>
  );
}