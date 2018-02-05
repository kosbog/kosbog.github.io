import React from 'react';
import space from '../assets/images/portfolio/space.jpeg';

const PortfolioItem = ({ item }) => {
  const { name, descriprion, technologies, image, color } = item;
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
                <li key={index}>{item}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

const Portfolio = ({ portfolioFull, showMorePortfolio, api }) => {
  const { portfolio } = api;
  const portfolioItems = portfolio.map((item, index) => {
    if (index < portfolioFull) {
      return (
        <PortfolioItem
          key={index}
          item={item} />
      )
    }
  })
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
          {portfolioItems}
        </div>
        <div className="btn portfolio__btn" onClick={showMorePortfolio}>
          <button type="button">more</button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;