import React from 'react';

const About = () => {
    return (
        <div className="about">
            <div className="wrapper about__wrapper">
                <div className="about__description">
                    <h2 className="section-header">About</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor reiciendis quae voluptatum tenetur sapiente temporibus nesciunt
                        praesentium amet esse possimus tempore repudiandae neque,
                        doloribus, aspernatur, vero quod. Libero, illum officiis.
                    </p>
                </div>
                <div className="about__description about--self">
                    <div className="about__image">
                        
                    </div>
                    <div className="about__bio">
                        <h3>
                            Hello everyone, I'm <span>Bogdan Kositskiy</span>
                            <br />
                            front-end developer
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolor reiciendis quae voluptatum tenetur sapiente temporibus nesciunt
                            praesentium amet esse possimus tempore repudiandae neque,
                            doloribus, aspernatur, vero quod. Libero, illum officiis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolor reiciendis quae voluptatum tenetur sapiente temporibus nesciunt
                            praesentium amet esse possimus tempore repudiandae neque,
                            doloribus, aspernatur, vero quod. Libero, illum officiis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;