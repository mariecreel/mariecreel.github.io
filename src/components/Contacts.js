import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {StyledContact} from './Contacts/Contact';
import contacts from './Contacts/contact.json';

/**
 * @param {object} props
 * @return {JSX}
 */
const Contacts = ({className}) => {
  return (
    <div className={className}>
      <h3>Contact</h3>
      <div className="contact-links">
        {contacts.contacts.map((contact, i) => {
          return <StyledContact
            contact={contact}
            key={`Contact-${i}`}
          />;
        })}
      </div>
    </div>
  );
};

Contacts.propTypes = {
  className: PropTypes.string.isRequired,
};

export const StyledContacts = styled(Contacts)`
    background: #fff;
    margin-top: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    & h3 {
        font-size: 2.5em;
        width: 100%;
    }
    & .contact-links {
        display: flex;
        justify-content: center;
        width: 100%;
    }
`;
