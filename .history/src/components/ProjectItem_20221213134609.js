import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologyElements = technologies.map(technology => 
    <span>{technology}</span>
  );

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologyElements}
      </div>
    </div>
  );
}

export default ProjectItem;

/*
The ProjectItem component should get a prop of technologies passed down from 
ProjectList. For each element in this array of technologies, create a <span> 
tag that displays the name of the technology.
*/
