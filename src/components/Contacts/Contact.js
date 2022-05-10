import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * @param {object} props
 * @return {JSX}
 */
const Contact = ({className, contact}) => {
  return (
    <a className={className} href={contact.link}>{contact.linkText}</a>
  );
};

Contact.propTypes = {
  className: PropTypes.string.isRequired,
  contact: PropTypes.object.isRequired,
};

export const StyledContact = styled(Contact)`
  padding: 20px;
`;
