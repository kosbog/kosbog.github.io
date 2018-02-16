import React from 'react';

const ExperienceItem = ({ index, item, fullExperience }) => {
    const { company, time, position, responsibility, color } = item;
    return (
        <div className="experience__item">
            <div className={`experience__position ${color}-bg-pseudo`}>
                <div className={`position__wrapper ${color}-color`}>
                    <span className="position__item position--name">
                        {position}
                    </span>
                    <span className="position__item position--time">
                        {time}
                    </span>
                </div>
            </div>
            <div className="experience__company">
                <span className="company__item company--name">
                    {company.name}
                </span>
                <span className="company__item company--info">
                    {company.description}
                </span>
            </div>
            <div className="experience__responsibility">
                <ul className="responsibility__list">
                    {responsibility.map((item, index) => {
                        return (
                            <li
                                className={`${color}-bg-pseudo`}
                                key={index}>{item}</li>
                        )
                    })}
                </ul>
            </div>
            <div
                className={`experience__full ${color}-bd`}
                onClick={() => fullExperience(index)} ></div>
        </div>
    )
}

const Experience = ({ api, fullExperience }) => {
    const { experience } = api;
    const experienceItems = experience.map((item, index) => {
        return (
            <ExperienceItem
                key={index}
                index={index}
                item={item}
                fullExperience={fullExperience} />
        );
    })
    return (
        <section className="experience">
            <div className="wrapper experience__wrapper">
                <h2 className="section-header">Experience</h2>
                <div className="experience__container">
                    {experienceItems}
                </div>
            </div>
        </section>
    );
}

export default Experience;