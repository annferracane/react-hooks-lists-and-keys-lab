import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(name);
  const technologyElements = technologies.map(technology => <span>{technology}</span>);

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/*technologyElements*/}
      </div>
    </div>
  );
}

export default ProjectItem;
