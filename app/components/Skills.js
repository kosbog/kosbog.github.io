import React from 'react';
import { skillsLevelAnimation } from '../utils/utils';

const SkillItem = ({ item }) => {
    const { name, value, color, description } = item;
    return (
        <div className="skills__item">
            <h4 className={`${color}-color`}>{name}</h4>
            <p>{description}</p>
            <div className={`skills__percent ${color}-color`}>
                <div className={`skills__level ${color}-bg`}></div>
                <div className="skills__value"></div>
            </div>
        </div>
    )
}

const Skills = () => {
    const skills = [
        {
            "name": "javascript",
            "value": "71",
            "color": "orange",
            "description": "Experience in AngularJS, React, ReactNative, Redux, MobX / Work with Firebase (authentication, storage)"
        },
        {
            "name": "html",
            "value": "86",
            "color": "yellow",
            "description": "HTML5 / Correct document structure / Writing a semantic layout. Using tags like <article>, <main>, <section>, <figure> etc."
        },
        {
            "name": "css",
            "value": "82",
            "color": "sea",
            "description": "Use SASS,LESS / Practise in BEM methodology / In friendship with transformation and animation. Love flex-box."
        }
    ];
    return (
        <div className="skills">
            <div className="wrapper skills__wrapper">
                <h2 className="section-header">Skills</h2>
                <div className="skills__container">
                    {
                        skills.map((item, index) => {
                            return (
                                <SkillItem
                                    key={index}
                                    item={item} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills;