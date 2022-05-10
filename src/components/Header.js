import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
/**
 * @param {object} props
 * @return {JSX}
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
  height: 70%;
  min-height: fit-content;
  width: 100%;
  min-width: 50%;
  color: #fff;
  font-family: Helvetica;
  font-size: 1.5em;
  background: #2b2d42;
  display: flex;
  justify-content: center;
  align-items: center;
  & h1 {
    font-weight: 400;
    margin: 20px;
    min-width: 70%;
    & strong {
      color: #f8f32b;
    }
  }
`;
