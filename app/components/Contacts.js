import React from 'react';

const ContactLocation = ({ }) => {
    return (
        <div className="contacts__location">
            loca
        </div>
    )
}

const ContactPhone = ({ }) => {
    return (
        <div className="contacts__phone">
            <div className="phone__requisites">
                <span className="phone__image icon icon-telegram"></span>
                <span className="phone__number">+380-(63)-644-54-55</span>
            </div>
            <div className="phone__requisites">
                <span className="phone__image icon icon-skype"></span>
                <span className="phone__number">badykos</span>
            </div>
            <div className="phone__requisites">
                <span className="phone__image icon icon-viber"></span>
                <span className="phone__number">+380-(63)-644-54-55</span>
            </div>
        </div>
    )
}

const ContactForm = ({ }) => {
    return (
        <form
            className="contacts__form">
            <div className="form__requisites">
                <input
                    placeholder="NAME"
                    id="name-requisites"
                    type="text" />
                <input
                    placeholder="E-MAIL"
                    id="email-requisites"
                    type="text" />
            </div>
            <div className="form__textarea">
                <textarea name="" id="text-requisites" placeholder="MESSAGE"></textarea>
            </div>
            <div className="form__button">
                <button type="submit">send</button>
            </div>
        </form>
    )
}

const ContactsTypeItem = ({ item, checkContact, currentContact }) => {
    const { type, value, url } = item;
    return (
        <div className="contacts__item type__item ">
            <input
                className="type__input"
                id={type}
                type="radio"
                name={type}
                value={type}
                checked={currentContact === type}
                onChange={checkContact} />
            <label
                htmlFor={type}
                className="type__label">
                <span className="type__name">{type}</span>
                <span className="type__value">{value}</span>
                <div className="type__icon">
                    <span className={`icon icon-${type}`}></span>
                </div>
            </label>
        </div>
    )
}

const Contacts = ({ api, checkContact, currentContact }) => {
    const { contacts } = api,
        primaryContacts = contacts.filter(item => {
            return item.primary === true;
        }),
        email = "e-mail",
        phone = "phone",
        location = "location";

    let toRender = null;

    switch (currentContact) {
        // case email:
        //     toRender = <ContactForm />;
        //     break;

        // case phone:
        //     toRender = <ContactPhone />;
        //     break;

        // case location:
        //     toRender = <ContactLocation />;
        //     break;

        // default:
        //     toRender = <ContactForm />;
        //     break;
    }

    return (
        <div className="contacts">
            <div className="wrapper contacts__wrapper">
                <div className="contacts__description">
                    <h2 className="section-header">contact</h2>
                    <p className="ml-90">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor reiciendis quae voluptatum tenetur sapiente temporibus nesciunt
                        praesentium amet esse possimus tempore repudiandae neque,
                        doloribus, aspernatur, vero quod. Libero, illum officiis.
                    </p>
                </div>
                <div className="contacts__container">
                    <div className="contacts__type">
                        {primaryContacts.map((item, index) => {
                            return (
                                <ContactsTypeItem
                                    key={index}
                                    item={item}
                                    checkContact={checkContact}
                                    currentContact={currentContact} />
                            )
                        })}
                    </div>
                    <div className="contacts__info">
                        {toRender}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;