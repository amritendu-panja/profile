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
import Experience from './components/experience/experience';
import Education from './components/education/education';
import PersonalDetails from './components/personal_details/personal_details';

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
                  activeLink === 'experience' ? <Experience /> :
                  activeLink === 'education' ? <Education /> :
                  activeLink === 'personal' ? <PersonalDetails /> :
                  null
                }            
                </Col>          
              </Row>
            </Card.Body>
            <Card.Footer>
              <Row>
                <Col>
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
