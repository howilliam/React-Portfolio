import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} className="card-img-top" />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project:</strong> {props.name}
          </li>
          <li>
            <strong>Website:</strong> <a href={props.link} class="btn btn-dark">Click Here</a>
          </li>
          <li>
            <strong>Github:</strong> <a href={props.github} class="btn btn-dark">Click Here</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;