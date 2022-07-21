/* eslint-disable max-len */
import React from 'react';
import './About.css';
import profilePic from '../images/faz.svg';
import facebook from '../images/icon-facebook.svg';
import instagram from '../images/icon-instagram.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import GoBack from './GoBack';

const About = () => (
  <section>
    <div className="container">
      <GoBack />
      <div className="background-img">
        <div className="box">
          <span />
          <span />
          <span />
          <span />
          <div className="content">
            <h2>Sobre nosotros</h2>
            <img className="profile-pic" src={profilePic} alt="profile-pic" />
            <p>vdcjhdcHBDVKBKJVBJKVJNRRVJKNBJNFJR </p>
            <p>DBVHJWBVHJRVHRBHJ</p>
            <ul className="tech-list">
              <li className="tech-list__item">HTML</li>
              <li className="tech-list__item">CSS</li>
              <li className="tech-list__item">JavaScript</li>
              <li className="tech-list__item">React</li>
              <li className="tech-list__item">Node.js</li>
              <li className="tech-list__item">Express</li>
              <li className="tech-list__item">MongoDB</li>
              <li className="tech-list__item">MySQL</li>
            </ul>
            <p>If you are interested in working together, please contact me at :</p>
            <div className="contact-links">
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={twitter} alt="twitter" />
              <img src={pinterest} alt="pinterest" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
