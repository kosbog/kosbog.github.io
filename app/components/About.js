import React from 'react';
import { Section } from './common/Section';
// import ttt from '../assets/images/self/self2.png';
const ttt = require('../assets/images/self/self2.jpg');

const About = ({ api }) => {
  const { images, about } = api,
    imagesItem = images.find(item => {
      if (item.section === 'about') {
        return item;
      }
    });
  return (
    <Section className="about">
      <div className="about__description">
        <h2 className="section-header">About</h2>
      </div>
      <div className="about__description about--self">
        <div className="about__image">
          <img src={ttt} alt="" />
        </div>
        <div className="about__bio">
          <h3>
            Hello everyone, I'm <span>Bohdan Kosytskyi</span>
            <br />
            front-end developer
                        </h3>
          <p>
            {about}
          </p>
        </div>
      </div>
    </Section>
  )
}

export default About;