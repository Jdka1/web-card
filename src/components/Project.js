import "./Project.css";
import React from "react";

function Project({ link, title, description, image, orientation }) {
  const projectClassName = `project ${orientation}`; // Assuming you have CSS classes like 'portrait' and 'landscape'

  const content = (
    <>
      {link ? (
        <a href={link} className="project-link">
          <img
            src={`${process.env.PUBLIC_URL}/project_previews/${image}`}
            alt={title}
          />
        </a>
      ) : (
        <img
          src={`${process.env.PUBLIC_URL}/project_previews/${image}`}
          alt={title}
        />
      )}

      <div className="text-panel">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );

  return <div className={projectClassName}>{content}</div>;
}

export default Project;
