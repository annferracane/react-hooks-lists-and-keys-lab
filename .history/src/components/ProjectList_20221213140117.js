import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log("hello");
  console.log(projects);
  const projectItems = projects.map(
    project => <ProjectItem key={project.id} name={} about={} technologies={}/>
  );

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItems}</div>
    </div>
  );
}

export default ProjectList;