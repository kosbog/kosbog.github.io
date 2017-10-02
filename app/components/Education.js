import React from 'react';
import { fullExperience } from '../utils/utils';

const EducationItem = ({ name, time, position, location, color }) => {
  return (
    <div className="education__item">
      <div className={`education__position ${color}-bg-pseudo`}>
        <div className={`position__wrapper ${color}-color`}>
          <span className="position__item position--name">
            {position}
          </span>
          <span className="position__item position--time">
            {time}
          </span>
        </div>
      </div>
      <div className="education__university">
        <span className="university__item university--name">
          {name}
        </span>
        <span className="university__item university--info">
          {location}
        </span>
      </div>
    </div>
  )
}

const Education = () => {
  const education = [
    {
      "name": "National Aviation University",
      "time": "2014-2015",
      "position": "Specialist of “Administrative management in the field of information security”",
      "location": "Kiev, Ukraine",
      "color": "yellow"
    },
    {
      "name": "National Aviation University",
      "time": "2010-2014",
      "position": "Bachelor of “Management of information security”",
      "location": "Kiev, Ukraine",
      "color": "orange"
    }
  ];
  return (
    <div className="education">
      <div className="wrapper education__wrapper">
        <h2 className="section-header">education</h2>
        <div className="education__container">
          {education.map((item, index) => {
            return (
              <EducationItem
                key={index}
                name={item.name}
                time={item.time}
                position={item.position}
                location={item.location}
                color={item.color} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Education;