import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {StyledProjectCard} from './Projects/ProjectCard';
import projects from './Projects/projects.json';

const Projects = ({className}) => {
  return (
    <div className={className}>
      <h2>Projects</h2>
      {projects.projects.map((project, i) => {
        return <StyledProjectCard key={`Project-${i}`} project={project}/>;
      })}
    </div>
  );
};

Projects.propTypes = {
  className: PropTypes.string.isRequired,
};

export const StyledProjects = styled(Projects)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    & h2 {
        color: #f8f32b;
        font-size: 2.5em;
        width: 100%;
        margin: 20px;
    }
`;
