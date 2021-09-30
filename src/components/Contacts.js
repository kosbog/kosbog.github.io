import React from 'react';
import { Section } from './common/Section';

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
        {!!url
          ? <a href={url} target="_blank" rel="noreferrer" className="type__value">{value}</a>
          : <span className="type__value">{value}</span>
        }
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
    url = '/app/data/CV_Bohdan_Kosytskyi.pdf';

  return (
    <Section className="contacts">
      <h2 className="section-header">contacts</h2>

      <div className="contacts__container">
        <div className="mb-lg">
          You can contact me by e-mail or phone. Also, you can find me on GitHub and in the social network "LinkedIn".
          All information for communication you will find below
        </div>
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
        <div className="contacts__cv">
          <div className="cv">
            <p className="cv__text">And download my CV<span className="cv__extension">(.pdf)</span></p>
            <a className="cv__link" href={url} download="CV_Bogdan_Kosytskyi">Download</a>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Contacts;