import React from 'react';

const About = ({api}) => {
    const { images, about } = api,
        imagesItem = images.find(item => {
            if (item.section === 'about') {
                return item;
            }
        });
    return (
        <section className="about">
            <div className="wrapper about__wrapper">
                <div className="about__description">
                    <h2 className="section-header">About</h2>
                </div>
                <div className="about__description about--self">
                    <div className="about__image">
                        <img src={imagesItem.url} alt="" />
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
            </div>
        </section>
    )
}

export default About;