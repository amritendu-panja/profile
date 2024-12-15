import './App.css'
import TopNavbar from './components/navigation/topnavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import ContactMe from './components/contactme/contactme';
import { useState } from 'react';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';

function App() {
  const [activeLink, setActiveLink] = useState('home');

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  }
  
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <TopNavbar onLinkChanged={onUpdateActiveLink} />
        </Row>
        <Row>          
          <Col>
          {
            activeLink === 'home' ? <Home /> : 
            activeLink === 'skills' ? <Skills />:
            activeLink === 'projects'? <Projects /> :
            null
          }            
          </Col>          
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <ContactMe />
            <Footer />
          </Col>
          
        </Row>
      </Container>
    </>
  )
}
export default App
