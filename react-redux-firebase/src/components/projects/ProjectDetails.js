import React from "react";
import "../materialize/css/materialize.min.css";
const ProjectDetails = props => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title id - {id}</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
            ducimus necessitatibus amet, facilis id exercitationem blanditiis
            dolorum iusto nulla vero aut tempora iure quod incidunt deserunt
            enim architecto, iste aliquam.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the Ivan Bit</div>
          <div>20nd December, 20pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
