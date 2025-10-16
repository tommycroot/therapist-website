import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
  const [offsets, setOffsets] = useState({
    about: -480,
    services: 60,
    contact: 0
  });

  const updateOffsets = () => {
    if (window.innerWidth <= 767) {
      setOffsets({
        about: -400,  
        services: -50,  
        contact: -40
      });
    } else {
      setOffsets({
        about: -560,
        services: -90,
        contact: -100
      });
    }
  };

  useEffect(() => {
    updateOffsets();
    window.addEventListener('resize', updateOffsets);
    return () => window.removeEventListener('resize', updateOffsets);
  }, []);

  return (
<Navbar expand="md" className="navbar">
  <Container className="navbar-container">
    <div className="nav-name">
      <ScrollLink className='nav-link-name' activeClass='nav-active' to="about" spy={true} smooth={true} offset={offsets.about} duration={600}>
        Darren Bagheri
      </ScrollLink>
    </div>

    <Nav className="nav-items">
      <ScrollLink className='nav-link' activeClass='nav-active' to="contact" spy={true} smooth={true} offset={offsets.about} duration={600}>About Me</ScrollLink>
      <ScrollLink className='nav-link' activeClass='nav-active' to="contact" spy={true} smooth={true} offset={offsets.about} duration={600}>How I Work</ScrollLink>
      <ScrollLink className='nav-link' activeClass='nav-active' to="how" spy={true} smooth={true} offset={offsets.services} duration={600}>Session Fees</ScrollLink>
      <ScrollLink className='nav-link' activeClass='nav-active' to="fees" spy={true} smooth={true} offset={offsets.contact} duration={600}>Contact</ScrollLink>
    </Nav>
  </Container>
</Navbar>

  );
};

export default NavBar;