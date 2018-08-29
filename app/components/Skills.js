import React from 'react';
import { Section } from './common/Section';

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

const Skills = ({ api }) => {
    const { skills } = api;
    const skillsItems = skills.map((item, index) => {
        return (
            <SkillItem
                key={index}
                item={item} />
        )
    })
    return (
        <Section className="skills">
            <h2 className="section-header">Skills</h2>
            <div className="skills__container">
                {skillsItems}
            </div>
        </Section>
    )
}

export default Skills;