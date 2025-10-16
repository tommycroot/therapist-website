import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
  const [offsets, setOffsets] = useState({
    about: 0,
    how: 50,
    session: 0,
    contact: 0
  });

 const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `navbar ${scrolled ? 'navbar-scrolled' : ''}`;

  return (
<Navbar expand="md" className={navbarClasses}>
  <Container className="navbar-container">
    <div className="nav-name">
      <ScrollLink className='nav-link-name' activeClass='nav-active' to="about" spy={true} smooth={true} offset={offsets.about} duration={600}>
        Darren Bagheri
      </ScrollLink>
    </div>

    <Nav className="nav-items">
      <ScrollLink className='nav-link' activeClass='nav-active' to="about" spy={true} smooth={true} offset={offsets.about} duration={600}>About Me</ScrollLink>
      <ScrollLink className='nav-link' activeClass='nav-active' to="areas" spy={true} smooth={true} offset={offsets.areas} duration={600}>How I Work</ScrollLink>
      <ScrollLink className='nav-link' activeClass='nav-active' to="fees" spy={true} smooth={true} offset={offsets.fees} duration={600}>Session Fees</ScrollLink>
      <ScrollLink className='nav-link' activeClass='nav-active' to="contact" spy={true} smooth={true} offset={offsets.contact} duration={600}>Contact</ScrollLink>
    </Nav>
  </Container>
</Navbar>

  );
};

export default NavBar;