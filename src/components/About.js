import React from 'react';
import { Section } from './common/Section';
import img from '../assets/images/self/self.png';

const About = ({ api }) => {
  const { about } = api;
  return (
    <Section className="about">
      <h2 className="section-header">About</h2>
      <div className="about__description about--self">
        <div className="about__image">
          <img src={img} alt="" />
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