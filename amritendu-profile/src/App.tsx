import './App.css'
import TopNavbar from './components/navigation/topnavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
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
      <main className='flex-shrink-0'>
        <header>
          <TopNavbar onLinkChanged={onUpdateActiveLink} />
        </header>
        <Container className='pb-3'>
          <Card>
            <Card.Body>
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
            </Card.Body>
            <Card.Footer>
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <ContactMe />
                  <Footer />
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Container>
      </main>
    </>
  )
}
export default App
