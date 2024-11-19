import React from "react";

const Education = () => {
  return (
    <div className="education-wrapper" id="education">
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
          Education
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

      <div className="timeline">
        <div className="timeline-item item-1">
          <div className="timeline-content">
            <h3>Bachelor of Computer Application (BCA)</h3>
            <p>
              Thrananellur Arts And Science College, Thanissery, Thrissur -
              University of Calicut
            </p>
            <span className="duration">2020 - 2023</span>
          </div>
        </div>
        <div className="timeline-item item-2">
          <div className="timeline-content">
            <h3>MERN Stack Development</h3>
            <p>Luminar Technolab Pvt Ltd, Kakkanad, Ernakulam</p>
            <span className="duration">Sep 2023 - 2024</span>
          </div>
        </div>
        <div className="timeline-item item-3">
          <div className="timeline-content">
            <h3>Computer Application (CS)</h3>
            <p>G.M.G.H.S.S Irinjalakuda, Thrissur</p>
            <span className="duration">2018 - 2019</span>
          </div>
        </div>
        <div className="timeline-item item-4">
          <div className="timeline-content">
            <h3>High School</h3>
            <p>Sreekrisha Higher School Anandapuram, Thrissur</p>
            <span className="duration">2017 - 2018</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .education-wrapper {
          max-width: 1600px;
          margin: 0 auto;
          padding: 130px 100px;
          background: linear-gradient(15deg, #fff2e6, #e67300, #fff2e6);
          border-radius: 50px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .timeline {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .timeline-item {
          padding: 20px;
          border-radius: 12px;
          color: #fff;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .timeline-item:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
        }

        .timeline-content h3 {
          font-size: 1.6rem;
          margin-bottom: 10px;
          font-family: "Roboto", sans-serif;
        }

        .timeline-content p {
          font-size: 1rem;
          margin-bottom: 10px;
        }

        .timeline-content .duration {
          font-size: 0.9rem;
          font-weight: bold;
        }

        .item-1 {
          background: linear-gradient(135deg, #3498db 0%, #8e44ad 100%);
        }

        .item-2 {
          background: linear-gradient(135deg, #f39c12 0%, #e74c3c 100%);
        }

        .item-3 {
          background: linear-gradient(135deg, #2ecc71 0%, #1abc9c 100%);
        }

        .item-4 {
          background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%);
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          from {
            border-right-color: transparent;
          }
          to {
            border-right-color: #fff;
          }
        }

        @media (max-width: 1200px) {
          .education-wrapper {
            padding: 100px 50px;
          }

          .timeline {
            grid-template-columns: repeat(1, 1fr);
          }
        }

        @media (max-width: 992px) {
          .education-wrapper {
            padding: 80px 30px;
          }

          .timeline {
            grid-template-columns: 1fr;
            padding-left: 0;
          }

          .timeline-item {
            margin-bottom: 20px;
          }

          .timeline-content h3 {
            font-size: 1.5rem;
          }

          .timeline-content p {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 768px) {
          .education-wrapper {
            padding: 60px 20px;
          }

          .timeline-item {
            padding: 15px;
          }

          .timeline-content h3 {
            font-size: 1.3rem;
          }

          .timeline-content p {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 576px) {
          .education-wrapper {
            padding: 50px 15px;
          }

          .timeline-item {
            padding: 10px;
          }

          .timeline-content h3 {
            font-size: 1.1rem;
          }

          .timeline-content p {
            font-size: 0.85rem;
          }

          .timeline-content .duration {
            font-size: 0.75rem;
          }
        }

        @keyframes shine {
          from {
            background-position: -200%;
          }
          to {
            background-position: 200%;
          }
        }
      `}</style>
    </div>
  );
};

export default Education;
