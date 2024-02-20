import React, { useState } from "react";
import Wrapper from "/src/components/Wrapper";
import Title from "/src/components/Title";
import projectData from "/src/projects.json";
import ProjectCard from "/src/components/projects/projects.jsx"

const Projects = () => {
  // Use the useState hook to set the initial state to the friendData JSON array
  const [projects, setProjects] = useState(projectData);

  return (
    <Wrapper>
      <Title>Project List</Title>

      {/* Map over the current state to render each FriendCard */}
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          name={project.name}
          image={project.image}
          github={project.github}
          link={project.link}
        />
      ))}
    </Wrapper>
  );
};

export default Projects;
