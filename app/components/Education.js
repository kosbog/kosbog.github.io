import React from 'react';

const EducationItem = ({ item }) => {
  const { name, time, position, location, color } = item;
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

const Education = ({ api }) => {
  const { education } = api;
  const educationItems = education.map((item, index) => {
    return (
      <EducationItem
        key={index}
        item={item} />
    );
  })
  return (
    <div className="education">
      <div className="wrapper education__wrapper">
        <h2 className="section-header">education</h2>
        <div className="education__container">
          {educationItems}
        </div>
      </div>
    </div>
  );
}

export default Education;