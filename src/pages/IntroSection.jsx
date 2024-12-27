import React from 'react';
import photo from '../images/photo.png'; // Path to your profile photo
import { FaEnvelope , FaGithub, FaLinkedin } from 'react-icons/fa';

function AnimatedIntroSection() {
  const handleResumeClick = () => {
    // Opens the PDF in a new tab
    window.open('/Amrutha Ranjakumar Resume.pdf.pdf', '_blank');
  };

  return (
    <section className="intro-container" id="introsection">
      {/* Left Side - Profile and Text */}
      <div className="left-side">
        <div className="text-container">
        <h1 className="greeting">Hello, I'm <span className="highlight">Amrutha Ranjakumar</span></h1>
          <h2 className="role">Full Stack Developer</h2>
          <p className="description">
            I specialize in creating robust and scalable web applications, with a passion for delivering user-centric digital experiences.
          </p>
          <button className="download-button" onClick={handleResumeClick}>
           Resume
          </button>
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="right-side">
        <div className="image-container">
          <img src={photo} alt="Amrutha Ranjakumar" className="profile-image" />
        </div>
      </div>

      {/* Sidebar with Social Links */}
      <div className="sidebar">
      <a href="" target="_blank" rel="noopener noreferrer" className="icon-link" title="gamil">
          <FaEnvelope />
        </a>
        <a href="https://github.com/amrutha-ranjakumar" target="_blank" rel="noopener noreferrer" className="icon-link" title="GitHub">
          <FaGithub />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" className="icon-link" title="LinkedIn">
          <FaLinkedin />
        </a>
      </div>

      <style jsx>{`
        /* Container Styling */
        .intro-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(135deg, #ffcc99,#ffb366,#ff8c1a);
          color: white;
          min-height: 75vh;
          padding: 4rem 2rem;
          position: relative;
          animation: backgroundAnimation 12s ease infinite;
          border-radius: 50px;
        
        }

        /* Left Side (Text and Buttons) */
        .left-side {
          width: 70%;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: fadeInLeft 1.5s ease-out forwards;
        }

        .text-container {
          max-width: 700px;
          text-align: left;
        }

     .greeting {
          font-size: 2.9rem;
          // color: #333;
          // margin-bottom: 0.5rem;
          // opacity: 0;
          animation: slideInFromLeft 1.5s ease-out forwards;
        }

        .highlight {
          color:  #4d1a00;
        }

        .role {
          font-size: 2rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .description {
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 2rem;
         color:  #4d1a00;
        }

        .download-button {
          padding: 12px 28px;
          background-color: #ff9b00;
          color: white;
          border: none;
          border-radius: 30px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .download-button:hover {
          background-color: #ff7f00;
          transform: scale(1.05);
        }

        /* Right Side (Profile Image) */
        .right-side {
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: fadeInRight 1.5s ease-out forwards;
        }

        .image-container {
          width: 350px;
          height: 350px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
          animation: zoomIn 1.5s ease-out;
         
          
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Sidebar Styling */
        .sidebar {
          position: absolute;
          top: 50%;
          right: 20px;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          animation: slideInFromRight 1.5s ease forwards;
        }

        .icon-link {
          font-size: 1.7rem;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .icon-link:hover {
          background-color: #ff9b00;
          transform: scale(1.1);
        }

        /* Animations */
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes backgroundAnimation {
          0% {
            background: linear-gradient(135deg,  #ffc266,#ffb366, #ffbf80);
          }
          // 50% {
          //   background: linear-gradient(135deg, #ffa64d, #ff9933);
          // }
          // 100% {
          //   background: linear-gradient(135deg, #ff8c1a, 	 #ff8000);
          // }
        }

        /* Responsive Layout */
        @media (max-width: 1024px) {
          .intro-container {
            flex-direction: column;
            padding: 3rem 2rem;
          }

          .left-side, .right-side {
            width: 100%;
          }

          .text-container {
            text-align: center;
          }

          .greeting {
            font-size: 2.3rem;
          }

          .role {
            font-size: 1.8rem;
          }

          .download-button {
            padding: 10px 25px;
            font-size: 1rem;
          }

          .image-container {
            width: 220px;
            height: 220px;
          }
        }

        @media (max-width: 480px) {
          .text-container {
            padding: 1rem;
          }

          .icon-link {
            font-size: 1.5rem;
            width: 45px;
            height: 45px;
          }

          .image-container {
            width: 180px;
            height: 180px;
          }

          .greeting {
            font-size: 2rem;
          }

          .role {
            font-size: 1.5rem;
          }

          .download-button {
            padding: 8px 20px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}

export default AnimatedIntroSection;
