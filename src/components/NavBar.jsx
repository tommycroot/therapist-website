import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
  const [offsets, setOffsets] = useState({
    intro: -60,
    about: -60,
    areas: -120,
    fees: -70,
    contact: -60
  });

  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  useEffect(() => {
    const updateOffsets = () => {
      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
       
        setOffsets({
          intro: -40,
          about: -40,
          areas: -80,
          fees: -50,
          contact: -40
        });
      } else {
        
        setOffsets({
          intro: -60,
          about: -60,
          areas: -120,
          fees: -70,
          contact: -60
        });
      }
    };

    updateOffsets(); 
    window.addEventListener('resize', updateOffsets);

    return () => window.removeEventListener('resize', updateOffsets);
  }, []);

  const navbarClasses = `navbar ${scrolled ? 'navbar-scrolled' : ''}`;
  const navItemsClasses = `nav-items ${isMobileMenuOpen ? 'open' : ''}`;

  const toggleMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Auto close menu on link click
  };

  return (
    <header className={navbarClasses}>
      <div className="navbar-container">
        <div className="nav-name">
          <ScrollLink
            className="nav-link-name"
            activeClass="nav-active"
            to="intro"
            spy={true}
            smooth={true}
            offset={offsets.intro}
            duration={600}
            onClick={handleLinkClick}
          >
            Darren Bagheri
          </ScrollLink>
        </div>

      
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          ☰
        </button>

        
        <nav className={navItemsClasses}>
          <ScrollLink className='nav-link' to="about" spy={true} smooth={true} offset={offsets.about} duration={600} onClick={handleLinkClick}>
            About Me
          </ScrollLink>
          <ScrollLink className='nav-link' to="areas" spy={true} smooth={true} offset={offsets.areas} duration={600} onClick={handleLinkClick}>
            How I Work
          </ScrollLink>
          <ScrollLink className='nav-link' to="fees" spy={true} smooth={true} offset={offsets.fees} duration={600} onClick={handleLinkClick}>
            Session Fees
          </ScrollLink>
          <ScrollLink className='nav-link' to="contact" spy={true} smooth={true} offset={offsets.contact} duration={600} onClick={handleLinkClick}>
            Contact
          </ScrollLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
