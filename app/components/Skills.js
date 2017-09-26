import React from 'react';

const Skills = () => {
    return (
        <div className="skills">
            <div className="wrapper skills__wrapper">
            <h2 className="section-header">Skills</h2>
            <div className="skills__container">
                <div className="skills__item">
                    <h4 className="skills--javascript">JavaScript</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Labore nostrum cum minima maxime, repellat dolor hic?
                    </p>
                    <div className="skills__percent skills--javascript">
                        <div className="skills__level skills--javascript"></div>
                        <div className="skills__value"></div>
                    </div>
                </div>
                <div className="skills__item">
                    <h4 className="skills--html">HTML</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Labore nostrum cum minima maxime, repellat dolor hic?
                    </p>
                    <div className="skills__percent skills--html">
                        <div className="skills__level skills--html"></div>
                        <div className="skills__value"></div>
                    </div>
                </div>
                <div className="skills__item">
                    <h4 className="skills--css">CSS</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Labore nostrum cum minima maxime, repellat dolor hic?
                    </p>
                    <div className="skills__percent skills--css">
                        <div className="skills__level skills--css"></div>
                        <div className="skills__value"></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Skills;