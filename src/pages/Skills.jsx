import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import html from '../images/html-removebg-preview.png';
import css from '../images/css-removebg-preview.png';
import react from '../images/react-removebg-preview.png';
import bootstrap from '../images/boostrap-removebg-preview.png';
import javascript from '../images/javascript-removebg-preview.png';
import nodejs from '../images/nodejs-removebg-preview.png';
import mongodb from '../images/mongodb-removebg-preview.png';

function Skills() {
  const skillsData = [
    { img: html, name: 'HTML' },
    { img: css, name: 'CSS' },
    { img: javascript, name: 'JavaScript' },
    { img: react, name: 'React' },
    { img: bootstrap, name: 'Bootstrap' },
    { img: nodejs, name: 'Node.js' },
    { img: mongodb, name: 'MongoDB' },
  ];

  return (
    <div id="skills"
      style={{
         background: 'linear-gradient(15deg,#fff2e6, #e67300,#ffcc99)',
        padding: '5rem 0',
        textAlign: 'center',
        animation: 'fadeIn 1s ease-out', // Fade-in animation for the entire section
        borderRadius:'60px'
      }}
    >
      <Container>
      <h1
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#333",
            textAlign: "center",
            marginBottom: "3rem",
            position: "relative",
            textTransform: "uppercase",
            letterSpacing: "4px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            width: "0%",
            animation: "typing 3s steps(30) 1s forwards, blink 0.75s step-end infinite",
          }}
        >
          <span
            style={{
              display: "inline-block",
              position: "relative",
              zIndex: "2",
            }}
          >
            Skills
          </span>
          <span
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: "linear-gradient(90deg, #ff5f57, #ffcd61)",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              zIndex: "-1",
              animation: "shine 1s infinite linear",
            }}
          ></span>
        </h1>

        <Row className="d-flex justify-content-center">
          {skillsData.map((skill, index) => (
            <Col
              key={index}
              xs={6}
              sm={4}
              md={3}
              className="mb-4"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.2}s`, // Staggered fade-in effect for each skill card
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.5rem',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    backgroundColor: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    style={{
                      width: '70px',
                      height: '70px',
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <h3
                  style={{
                    marginTop: '1rem',
                    fontWeight: '600',
                    fontSize: '1.25rem',
                    color: '#333',
                    animation: 'fadeInText 1s ease-out', // Animation for skill text
                  }}
                >
                  {skill.name}
                </h3>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Inline CSS for animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInText {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Skills;
