import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Row } from 'react-bootstrap';
import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Using react-icons

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qh7mnxu', 'template_n5zictb', form.current, {
        publicKey: 'XkNpRc5qOFp1B7Lc-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className='contact-container' id="contact">
      <form ref={form} onSubmit={sendEmail}>
        <Row>
          <Col xs={12} md={8} lg={6} className='mx-auto'>
            <h1 className="title">Get In Touch</h1>
            <div className='form-group'>
              <label htmlFor='name' className='form-label'>Full Name:</label>
              <input
                type='text'
                className='form-control'
                name='from_name'
                placeholder='Enter your name'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email' className='form-label'>Email:</label>
              <input
                type='email'
                className='form-control'
                name='from_email'
                placeholder='Enter your email'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message' className='form-label'>Message:</label>
              <textarea
                name='message'
                className='form-control'
                placeholder='Your message...'
                rows='5'
              />
            </div>
            <button type='submit' className='btn-submit'>
              Send Message
            </button>

            <div className='social-links'>
              <a href='' target='_blank' rel='noopener noreferrer' className='social-icon'>
                <FaWhatsapp />
              </a>
              <a href='' target='_blank' rel='noopener noreferrer' className='social-icon'>
                <FaEnvelope />
              </a>
              <a href='https://github.com/amrutha-ranjakumar' target='_blank' rel='noopener noreferrer' className='social-icon'>
                <FaGithub />
              </a>
              <a href='' target='_blank' rel='noopener noreferrer' className='social-icon'>
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
      </form>

      <p className='footer-text'>
        &copy; 2024 PORTFOLIO. | Built with React & Bootstrap.
      </p>

      <style jsx>{`
        .contact-container {
          background: linear-gradient(135deg, #1d2671, #c33764);
          padding: 80px 20px;
          min-height: 100vh;
          border-radius: 50px;
        }

        .title {
          font-size: 3rem;
          font-weight: 700;
          color: #fff;
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
          text-transform: uppercase;
          letter-spacing: 4px;
          overflow: hidden;
          white-space: nowrap;
          animation: typing 3s steps(30) 1s forwards, blink 0.75s step-end infinite;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          font-size: 1.2rem;
          color: #fff;
        }

        .form-control {
          width: 100%;
          padding: 15px;
          border: 2px solid #fff;
          border-radius: 50px;
          background: transparent;
          color: #fff;
          font-size: 1rem;
          margin-top: 8px;
        }

        .form-control::placeholder {
          color: #fff;
          opacity: 0.7;
        }

        .form-control:focus {
          border-color: #ff7e5f;
          outline: none;
        }

        .btn-submit {
          width: 100%;
          padding: 15px;
          background: linear-gradient(135deg, #ff7e5f, #feb47b);
          border: none;
          border-radius: 50px;
          font-size: 1.2rem;
          font-weight: bold;
          color: white;
          cursor: pointer;
          transition: background 0.3s ease-in-out;
        }

        .btn-submit:hover {
          background: linear-gradient(135deg, #feb47b, #ff7e5f);
          transform: scale(1.05);
        }

        .social-links {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          gap: 25px;
        }

        .social-icon {
          font-size: 2.5rem;
          color: #fff;
          transition: transform 0.3s ease-in-out;
        }

        .social-icon:hover {
          transform: scale(1.2);
        }

        .social-icon:active {
          transform: scale(0.9);
        }

        .footer-text {
          font-size: 0.85rem;
          color: #1a0d00;
          text-align: center;
          margin-top: 5rem;
        }

        @media (max-width: 768px) {
          .contact-container {
            padding: 60px 20px;
          }

          .title {
            font-size: 2rem;
          }

          .form-control {
            font-size: 0.9rem;
          }

          .social-icon {
            font-size: 2rem;
          }
        }

        @media (max-width: 576px) {
          .contact-container {
            padding: 50px 15px;
          }

          .title {
            font-size: 1.8rem;
          }

          .form-label {
            font-size: 1rem;
          }

          .form-control {
            font-size: 0.85rem;
          }

          .footer-text {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
