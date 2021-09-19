import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaYoutube,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h1>Contact Me!</h1>
            <h4>Email: john_smith@gmail.com</h4>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to= {'//www.github.com'}
              target='_blank'
              aria-label='Github'
            >
              <FaGithub />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to= {'//www.linkedin.com'}
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;