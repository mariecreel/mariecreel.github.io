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
        I lean towards accessible front-end development
        and mobile app development, but I&#39;ve also built
        RESTful APIs, web scrapers, and other back-end software.
      </p>
    </div>
  );
};

AboutMe.propTypes = {
  className: PropTypes.string.isRequired,
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
