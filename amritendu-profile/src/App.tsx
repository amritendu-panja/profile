import './App.css'
import TopNavbar from './components/navigation/topnavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import ContactMe from './components/contactme/contactme';

function App() {
  

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <TopNavbar />
        </Row>
        <Row>
          <Col></Col>
          <Col md="auto">
            <Home />
          </Col>
          <Col md={3}>
            <ContactMe />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Footer />
        </Row>
      </Container>
    </>
  )
}

export default App
