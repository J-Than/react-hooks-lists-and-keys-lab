import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  const items = projects.map(arrItem => {
  return <ProjectItem
    key={arrItem.id} 
    name={arrItem.name} 
    about={arrItem.about} 
    technologies={arrItem.technologies} />
})

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{items}</div>
    </div>
  );
}

export default ProjectList;
