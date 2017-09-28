import React from 'react';
import space from '../assets/images/portfolio/space.jpeg';

const PortfolioItem = ({ name, descriprion, technologies, image, color }) => {
  return (
    <div className="portfolio__item">
      <div className="item--wrapper">
        <img src={space} alt="" />
        <div className={`item--info ${color}-bg-opacity`}>
          <span className="item--name">{name}</span>
          <span className="item--descriprion">{descriprion}</span>
          <span className="item--list">Create with:</span>
          <ul>
            {technologies.map((item, index) => {
              return (
                <li>{item}</li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="portfolio__full"></div>
    </div>
  )
}

const Portfolio = () => {
  const portfolio = [
    {
      "name": "Fairy Cake Corp",
      "descriprion": "Bakery website",
      "technologies": [
        "React", "Redux", "Webpack", "Firebase"
      ],
      "image": "url/to/image",
      "color": "yellow"
    },
    {
      "name": "Fairy Cake Corp",
      "descriprion": "Bakery website",
      "technologies": [
        "React", "Redux", "Webpack", "Firebase"
      ],
      "image": "url/to/image",
      "color": "pink"
    },
    {
      "name": "Fairy Cake Corp",
      "descriprion": "Bakery website",
      "technologies": [
        "React", "Redux", "Webpack", "Firebase"
      ],
      "image": "url/to/image",
      "color": "sea"
    },
    {
      "name": "Fairy Cake Corp",
      "descriprion": "Bakery website",
      "technologies": [
        "React", "Redux", "Webpack", "Firebase"
      ],
      "image": "url/to/image",
      "color": "green"
    },
    {
      "name": "Fairy Cake Corp",
      "descriprion": "Bakery website",
      "technologies": [
        "React", "Redux", "Webpack", "Firebase"
      ],
      "image": "url/to/image",
      "color": "orange"
    }
  ]
  return (
    <div className="portfolio">
      <div className="wrapper portfolio__wrapper">
        <div className="portfolio__description">
          <h2 className="section-header">portfolio</h2>
          <p className="ml-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolor reiciendis quae voluptatum tenetur sapiente temporibus nesciunt
            praesentium amet esse possimus tempore repudiandae neque,
            doloribus, aspernatur, vero quod. Libero, illum officiis.
          </p>
        </div>
        <div className="portfolio__container">
          {portfolio.map((item, index) => {
            return (
              <PortfolioItem
                key={index}
                name={item.name}
                descriprion={item.descriprion}
                technologies={item.technologies}
                image={item.image}
                color={item.color} />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;