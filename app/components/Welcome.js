import React from 'react';

const Greeting = ({ scrollToElement }) => {
    return (
        <div className="greeting">
            <h1>Bogdan Kosytskyi</h1>
            <p><q>Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time</q></p>
            <span>Thomas A. Edison</span>
            <div className="btn">
                <button type="button" onClick={() => scrollToElement('about')}>more</button>
            </div>
        </div>
    )
}

const Photo = ({img}) => {
    return (
        <div className="photo">
            <img src={img.url} alt="I am" className="photo__image" />
        </div>
    )
}

const Welcome = ({ api, scrollToElement }) => {
    const { images } = api,
        imagesItem = images.find(item => {
            if (item.section === 'welcome') {
                return item;
            }
        });

    return (
        <section className="home">
            <header className="wrapper home__wrapper">
                <Greeting scrollToElement={scrollToElement} />
                <Photo img={imagesItem} />
            </header>
        </section>
    )
}

export default Welcome;