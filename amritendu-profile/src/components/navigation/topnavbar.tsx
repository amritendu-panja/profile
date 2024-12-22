import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function TopNavbar({onLinkChanged} : any) {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
    onLinkChanged(value);
  }

  return (
    <Navbar variant='' expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <label>Amritendu Panja</label>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link href="#home" 
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink("home")}>
                Home
            </Nav.Link>
            <Nav.Link href="#skills" 
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink("skills")}>
                Skills
            </Nav.Link>            
            <Nav.Link href="#projects" 
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink("projects")}>
                Projects
            </Nav.Link>
            <Nav.Link href="#experience" 
              className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink("experience")}>
                Experience
            </Nav.Link>
            <Nav.Link href="#education" 
              className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink("education")}>
                Education
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}