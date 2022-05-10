import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {StyledHeader} from './components/Header';
import {StyledAboutMe} from './components/AboutMe';
import {StyledProjects} from './components/Projects';
// must pass class name and attach to html
// for styled component styles to apply
// see https://styled-components.com/docs/basics#styling-any-component
/**
 * @param {object} props
 * @return {JSX}
 */
function App({className}) {
  return (
    <div className={className}>
      <StyledHeader />
      <StyledAboutMe />
      <StyledProjects />
    </div>
  );
}

App.propTypes = {
  className: PropTypes.string.isRequired,
};

export const StyledApp = styled(App)`
  text-align: center;
  flex-direction: column;
  margin: 0;
  height: 100%;
  display: flex;
  width: 100%;
  font-family: Helvetica, sans-serif;
`;
