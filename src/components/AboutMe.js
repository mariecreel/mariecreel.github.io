import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AboutMe = ({className}) => {
  return (
    <div className={className}>
      <p>
        I&#39;m passionate aboout building performant, accessible web
         applications,
        and I love solving problems across the stack.
      </p>
    </div>
  );
};

export const StyledAboutMe = styled(AboutMe)`
    background: #f8f32b;
    color: black;
    padding: 50px;
    font-size: 1.5em;
`