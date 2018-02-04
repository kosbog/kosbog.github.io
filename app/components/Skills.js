import React from 'react';

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
    console.log(api);
    const skillsItems = api.skills.map((item, index) => {
        return (
            <SkillItem
                key={index}
                item={item} />
        )
    })
    return (
        <div className="skills">
            <div className="wrapper skills__wrapper">
                <h2 className="section-header">Skills</h2>
                <div className="skills__container">
                    {skillsItems}
                </div>
            </div>
        </div>
    )
}

export default Skills;