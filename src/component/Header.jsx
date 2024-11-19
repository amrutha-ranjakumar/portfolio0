import React from 'react';
import { Link } from 'react-scroll';
import { Container, Nav, Navbar } from 'react-bootstrap';

function PortfolioNavbar() {
  return (
    <Navbar expand="lg" fixed="top" className="shadow-sm" style={{ background: 'rgba(0, 0, 0, 0.5)', height: '100px' }}>
      <Container>
        <Navbar.Toggle aria-controls="portfolio-navbar-nav" />
        <Navbar.Collapse id="portfolio-navbar-nav">
          <Nav className="ms-auto d-flex justify-content-center w-100">
            <Nav.Link
              as={Link}
              to="introsection"
              smooth
              spy
              offset={-70}
              duration={500}
              className="text-light mx-4 hover-underline-animation"
              style={{ fontSize: '1.5rem' }}
            >
              Intro
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="skills"
              smooth
              spy
              offset={-70}
              duration={500}
              className="text-light mx-4 hover-underline-animation"
              style={{ fontSize: '1.5rem' }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="projects"
              smooth
              spy
              offset={-70}
              duration={500}
              className="text-light mx-4 hover-underline-animation"
              style={{ fontSize: '1.5rem' }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="education"
              smooth
              spy
              offset={-70}
              duration={500}
              className="text-light mx-4 hover-underline-animation"
              style={{ fontSize: '1.5rem' }}
            >
              Education
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="contact"
              smooth
              spy
              offset={-70}
              duration={500}
              className="text-light mx-4 hover-underline-animation"
              style={{ fontSize: '1.5rem' }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* CSS for hover effect and active link animation */}
      <style>{`
        .hover-underline-animation {
          position: relative;
          display: inline-block;
          padding-bottom: 4px;
        }

        .hover-underline-animation::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #ffffff;
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.25s ease-out;
        }

        .hover-underline-animation:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        /* Active link underline animation */
        .active {
          color: #ff4081 !important; /* Highlight color */
        }

        /* Responsive design adjustments */
        @media (max-width: 991px) {
          .navbar-brand {
            font-size: 1.2rem;
          }

          .navbar-nav .nav-link {
            font-size: 1.5rem;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
          }
        }

        @media (max-width: 767px) {
          .navbar-nav .nav-link {
            font-size: 1.4rem;
            margin-left: 0.25rem;
            margin-right: 0.25rem;
          }

          .navbar-collapse {
            text-align: center;
          }
        }
      `}</style>
    </Navbar>
  );
}

export default PortfolioNavbar;
