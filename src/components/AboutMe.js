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
      <p>
          More specifically, I&#39;m experienced with API development, mobile 
          app development, and accessible front-end development. I&#39;m eager
           to grow by facing new challenges in novel problem spaces,
           and I strive to make a positive impact.</p>
    </div>
  );
};

export const StyledAboutMe = styled(AboutMe)`
    background: #f8f32b;
    color: black;
    padding: 30px 50px;
    font-size: 1.5em;
    & p {
        margin: 20px 0px;
    }
`;
