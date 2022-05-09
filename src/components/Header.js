import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
/**
 * @param {object} props
 * @returns {JSX}
 */
const Header = ({className}) => {
  return (
    <div className={className}>
      <h1>
        Hi there! I&#39;m <strong>Marie Creel</strong>, and 
        I&#39;m a full stack web
        developer
        <br/>🌕🥞🕸️👩🏻‍💻
      </h1>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string.isRequired,
};

export const StyledHeader = styled(Header)`
  height: 50%;
  width: 100%;
  min-width: 50%;
  color: white;
  font-family: Helvetica;
  font-size: 2em;
  background: #2b2d42;
  display: flex;
  justify-content: center;
  align-items: center;
  & h1 {
    font-weight: 400;
    margin: 0px 20px;
    min-width: 70%;
    margin-top: -20px;
    & strong {
      color: #f8f32b;
    }
  }
`;
