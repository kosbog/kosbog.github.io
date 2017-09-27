import React from 'react';
import {skillsLevelAnimation} from '../utils/utils';

const SkillItem = ({name, value, color}) => {
    return (
        <div className="skills__item">
            <h4 className={`${color}-color`}>{name}</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Labore nostrum cum minima maxime, repellat dolor hic?
            </p>
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
            "color": "orange"
        },
        {
            "name": "html",
            "value": "86",
            "color": "yellow"
        },
        {
            "name": "css",
            "value": "82",
            "color": "sea"
        }
    ];
    return (
        <div className="skills">
            <div className="wrapper skills__wrapper">
                <h2 className="section-header">Skills</h2>
                <div className="skills__container">
                    {
                        skills.map((item, index)=>{
                            console.log(item);
                            return (
                                <SkillItem
                                key={index}
                                name={item.name}
                                value={item.value}
                                color={item.color} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills;