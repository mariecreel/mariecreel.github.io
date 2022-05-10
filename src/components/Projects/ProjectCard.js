import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

/**
 * @param {object} props - component properties
 * @param {string} props.className - className for styles
 * @param {object} props.project - information about project to render
 * @param {string} props.project.title - project title
 * @param {string} props.project.description - project description
 * @param {string} props.project.link - project link (optional)
 * @param {string} props.project.repository - project repository (optional)
 * @return {JSX}
 */
const ProjectCard = ({className, project}) => {
  return (
    <div className={className}>
      {project.title && (<h3>{project.title}</h3>)}
      {project.description && (<p>{parse(project.description)}</p>)}
      <div className={`project-card-links`}>
        {project.link && (
          <a href={project.link}>
            {
            typeof project.linkText === 'undefined' ?
            'View Project' : project.linkText
            }
          </a>
        )}
        {project.repository && (
          <a href={project.repository}
            aria-label={`Repository for ${project.title}`}>
            Repo
          </a>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  className: PropTypes.string.isRequired,
  project: PropTypes.object.isRequired,
};

export const StyledProjectCard = styled(ProjectCard)`
    display: flex;
    flex-direction: column;
    width: 30%;
    border-radius: 20px;
    color: #2b2d42;
    background: #FFF;
    padding: 10px;
    margin: 10px;
    height: fit-content;
    @media (max-width: 600px) {
        width: 70%;
    }
    @media (min-width: 1770px) {
        width: 20%;
    }
    & h3 {
        margin: 5px 15px 15px;
    }
    & .project-card-links {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        & a {
            margin: 5px;
        }
    }
`;
