import React from 'react';

const ContactsTypeItem = ({ type, value, url, checkContact, isCheckedContact }) => {
    return (
        <div className="contacts__item type__item ">
                <label htmlFor={type} className="type__label">
                    <span className="type__name">{type}</span>
                    <span className="type__value">{value}</span>
                    <input
                        className="type__input"
                        id={type}
                        type="radio"
                        name={type}
                        value={type}
                        checked={isCheckedContact === type}
                        onChange={checkContact}
                    />
                </label>
        </div>
    )
}

const Contacts = ({ checkContact, isCheckedContact }) => {
    const contacts = [
        {
            "primary": true,
            "type": "e-mail",
            "value": "badykos@gmail.com",
            "url": null
        },
        {
            "primary": true,
            "type": "phone",
            "value": "+380(63)-644-54-55",
            "url": null
        },
        {
            "type": "skype",
            "value": "badykos",
            "url": null
        },
        {
            "type": "linkedin",
            "value": "Bogdan Kosytskyy",
            "url": "https://www.linkedin.com/in/bogdan-kosytskyy/"
        },
        {
            "type": "github",
            "value": "kosbog",
            "url": "https://github.com/kosbog"
        },
        {
            "primary": true,
            "type": "location",
            "value": "Ukraine, Kiev",
            "url": null
        }
    ],
        primaryContacts = contacts.filter(item => {
            return item.primary === true;
        });

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
                                    type={item.type}
                                    value={item.value}
                                    url={item.url}
                                    checkContact={checkContact}
                                    isCheckedContact={isCheckedContact} />
                            )
                        })}
                    </div>
                    <div className="contacts__info"></div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;