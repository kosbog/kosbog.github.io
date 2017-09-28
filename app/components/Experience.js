import React from 'react';
import { fullExperience } from '../utils/utils';

const ExperienceItem = ({ index, company, time, position, responsibility, color }) => {
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
                            <li className="" key={index}>{item}</li>
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

const Experience = () => {
    const experience = [
        {
            "company": {
                "name": "Wayne Enterprises, Inc.",
                "description": "Lorem ipsum dolor sit amet.",
            },
            "time": "2000-2016",
            "position": "Batman Hero",
            "responsibility": [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit - Lorem ipsum dolor sit amet consectetur adipisicing elit."
            ],
            "color": "green"
        },
        {
            "company": {
                "name": "Star Labs",
                "description": "Lorem ipsum dolor sit amet.",
            },
            "time": "1995-1998",
            "position": "Flash Hero",
            "responsibility": [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit - Lorem ipsum dolor sit amet consectetur adipisicing elit."
            ],
            "color": "orange"
        },
        {
            "company": {
                "name": "Queen Industries",
                "description": "Lorem ipsum dolor sit amet.",
            },
            "time": "1998-2000",
            "position": "Green Arrow Hero",
            "responsibility": [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit - Lorem ipsum dolor sit amet consectetur adipisicing elit."
            ],
            "color": "sea"
        }
    ];
    return (
        <div className="experience">
            <div className="wrapper experience__wrapper">
                <h2 className="section-header">Experience</h2>
                <div className="experience__container">
                    {experience.map((item, index) => {
                        return (
                            <ExperienceItem
                                key={index}
                                index={index}
                                company={item.company}
                                time={item.time}
                                position={item.position}
                                responsibility={item.responsibility}
                                color={item.color} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Experience;