import React from 'react';
import self from '../assets/images/self/self2.jpg';

const About = () => {
    return (
        <div className="about">
            <div className="wrapper about__wrapper">
                <div className="about__description">
                    <h2 className="section-header">About</h2>
                    <p className="ml-90">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor reiciendis quae voluptatum tenetur sapiente temporibus nesciunt
                        praesentium amet esse possimus tempore repudiandae neque,
                        doloribus, aspernatur, vero quod. Libero, illum officiis.
                    </p>
                </div>
                <div className="about__description about--self">
                    <div className="about__image">
                        <img src={self} alt="" />
                    </div>
                    <div className="about__bio">
                        <h3>
                            Hello everyone, I'm <span>Bogdan Kosytskyi</span>
                            <br />
                            front-end developer
                        </h3>
                        <p>
                            {/* С самого дества я мечтал совсем не о том что бы сидеть за компьютером и писать код - 
                            я хотел стать профессиональным футболистом. Я даже играл за сборную по футболу своей школы.
                            Но, моя "карьера футболиста" закончилась в то время когда я начал учебу в университете.
                            Я начал увлекаться веб разработкой на втором курсе. 
                            Тогда, в обычном блокноте я создал свою первую страничку HTML и подключил к ней свой первый CSS файл.
                            Это было незабываемое чувство! */}

                            From childhood I didn't dream about that i will sit at the computer and write a code - I wanted to become a professional football player. 
                            I even played for the school football team, yeah!.. But, my "football career" ended when I started studying at the university. 
                            I have a fancy for web development in the second year of study. Thereat in simple textpad I created my first HTML page and 
                            connected my first CSS file to it. It was an unforgettable feeling!

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;