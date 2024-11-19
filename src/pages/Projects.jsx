import React from "react";
import { Container } from "react-bootstrap";
import fooddelivery from "../images/food delivery.png";
import mediaplayer from "../images/media player.png";
import neflix from "../images/neflix.png";
import projectfair from "../images/projectfair.png";
import restaurant from "../images/restaurant.png";
import simpleinterest from "../images/simple interest.png";
import counterredux from "../images/counter-redux.png";

function Projects() {
  const projects = [
    {
      title: "Food Delivery",
      image: fooddelivery,
      link: "https://food-delivery-one-sigma.vercel.app",
    },
    {
      title: "Media Player",
      image: mediaplayer,
      link: "https://front-media-player.vercel.app",
    },
    {
      title: "Netflix Clone",
      image: neflix,
      link: "https://netflix-git-master-amrutha-ranjakumars-projects.vercel.app",
    },
    {
      title: "Projectfair",
      image: projectfair,
      link: "https://front-project-fair.vercel.app",
    },
    {
      title: "Restaurant",
      image: restaurant,
      link: "https://restaurant-eight-liard.vercel.app",
    },
    {
      title: "Simple Interest",
      image: simpleinterest,
      link: "https://simpleinterest-ten.vercel.app",
    },
    {
      title: "Counter Redux",
      image: counterredux,
      link: "https://counter-redux-tan.vercel.app",
    },
  ];

  return (
    <div id="projects"
      style={{
        minHeight: "100vh", // Ensures it spans the entire viewport height
        background: 'linear-gradient(15deg,#fff2e6, #e67300,#fff2e6)',
       borderRadius:'50px',
        padding: "2rem 0", // Add some vertical padding
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
            Projects
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

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              key={index}
            >
              <div className="card-content">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="overlay">
                  <h2 className="project-title">{project.title}</h2>
                  <button className="view-button">View Project</button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
      <style>
        {`
          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }
          
          @keyframes blink {
            50% {
              border-color: transparent;
            }
          }

          .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            justify-items: center;
          }

          .project-card {
            text-decoration: none;
            color: inherit;
            width: 100%;
            max-width: 300px;
            position: relative;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            transition: box-shadow 0.3s ease, transform 0.3s ease;
          }

          .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          }

          .card-content {
            position: relative;
          }

          .project-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            transition: transform 0.3s ease;
          }

          .project-card:hover .project-image {
            transform: scale(1.1);
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8));
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s ease;
            color: #fff;
            text-align: center;
          }

          .project-card:hover .overlay {
            opacity: 1;
          }

          .project-title {
            font-size: 1.5rem;
            font-weight: bold;
            margin: 0.5rem 0;
          }

          .view-button {
            padding: 0.5rem 1rem;
            font-size: 1rem;
            color: #fff;
            background: #007bff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .view-button:hover {
            background: #0056b3;
          }

          @media (max-width: 576px) {
            .project-title {
              font-size: 1.2rem;
            }

            .view-button {
              font-size: 0.9rem;
              padding: 0.4rem 0.8rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Projects;
