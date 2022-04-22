import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <div style={{ marginTop: '6rem' }}></div>
      <footer>
        <div className='col-12 col-lg-10 mx-auto'>
          <div className='row'>
            <div className='col-6 col-lg-3'>
              <h3>FindMentor.com</h3>
              <h6>
                The vision for ‘find a mentor’ is <br /> to create a
                professional platform <br /> for online learning connecting{' '}
                <br /> mentors and professionals.
              </h6>
            </div>

            <div className='col-6 col-lg-3'>
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href='/homepage'>Home</a>
                </li>
                <li>
                  <a href='/about'>About</a>
                </li>
                <li>
                  <a href='/service'>Service</a>
                </li>
                <li>
                  <a href='/contact'>Contact</a>
                </li>
              </ul>
            </div>

            <div className='col-6 col-lg-3'>
              <h3>Contact</h3>
              <ul>
                <li>
                  <a href='http://#'>+91 1234567890</a>
                </li>
                <li>
                  <a href='http://#'>+91 223344</a>
                </li>
                <li>
                  <a href='http://#'>findmentor@gmail.com</a>
                </li>
                <li>
                  <a href='https://www.google.com/maps/place/Pune+International+Airport+Area,+Lohegaon,+Pune,+Maharashtra/@18.5782028,73.9102148,14z/data=!3m1!4b1!4m12!1m6!3m5!1s0x3bc2c134e6c4ff8f:0xa810745cf9310798!2sPune+International+Airport!8m2!3d18.579343!4d73.9089168!3m4!1s0x3bc2c153b1524207:0x2d9bce408a8c8746!8m2!3d18.5775875!4d73.9418614'>
                    Hinjewadi, Pune, Maharashtra
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-6 col-lg-3'>
              <h3>Follow Us</h3>
              <div className='row'>
                <div className='col-3 mx-auto'>
                  <a href='https://www.youtube.com/' target='_youtube'>
                    <FontAwesomeIcon icon={faYoutube} size='2x' />
                  </a>
                </div>

                <div className='col-3 mx-auto'>
                  <a href='https://www.instagram.com/' target='_inta'>
                    <FontAwesomeIcon icon={faInstagram} size='2x' />
                  </a>
                </div>
                <div className='col-3 mx-auto'>
                  <a href='https://www.twitter.com/' target='_twitter'>
                    <FontAwesomeIcon icon={faTwitter} size='2x' />
                  </a>
                </div>
                <div className='col-3 mx-auto'>
                  <a href='https://www.facebook.com/' target='_facebook'>
                    <FontAwesomeIcon icon={faFacebook} size='2x' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className='mt-1'>
            <p className='main-hero-para text-center w-100'>
              Copyright @ 2022 FindMentor. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
